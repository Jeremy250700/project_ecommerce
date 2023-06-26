import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clear, totals } from '../fetures/Product'
import { add_data } from '../fetures/CheckoutSlice'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import axios from 'axios'

export default function Checkout() {
  const product = useSelector((state) => state.product)
  const user = useSelector((state) => state.auth.user)

  const [delivery, setDelivery] = useState('')
  const [deliveryPrice, setDeliveryPrice] = useState(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [item, setItem] = useState()

  const handleDelivery = (event) => {
    setDelivery(event.target.value)
  }

  const handleDeliveryPrice = (d) => {
    switch (d) {
      case 'FedEx':
        setDeliveryPrice(16)
        break
      case 'UPS':
        setDeliveryPrice(8)
        break
    }
  }

  const [formCheckout, setFormCheckout] = useState({
    userId: user.id,
    email: '',
    full_name: '',
    no_card: '',
    mm_yy: '',
    cvc: '',
    address: '',
    state: 'state',
    zip: '',
    total: product.cartTotalPrice + deliveryPrice,
  })

  const setCheckoutValue = (event) =>
    setFormCheckout({
      ...formCheckout,
      [event.target.name]: event.target.value,
    })

  const getCartData = async () => {
    const cartData = await axios.get(
      `http://localhost:3001/carts/?userId=${user.id}&_expand=proteinEnergySnack`
    )
    setItem(cartData.data)
  }
  const handleCheckout = async (event) => {
    event.preventDefault()
    await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    })
    await axios.post('http://localhost:3001/transactions', formCheckout)
    let getTransaction = await axios.get(
      `http://localhost:3001/transactions/?userId=${user.id}`
    )
    let getTransactionId = getTransaction.data.length - 1
    for (let i = 0; i < item.length; i++) {
      await axios.post('http://localhost:3001/transaction_details', {
        transactionId: getTransaction.data[getTransactionId].id,
        proteinEnergySnackId: item[i].proteinEnergySnackId,
        quantity: item[i].quantity,
      })
      await axios.delete(`http://localhost:3001/carts/${item[i].id}`)
    }
    dispatch(clear())
    Swal.fire('Done!', 'Thank you for your order.', 'success')
    // navigate('/')
  }

  useEffect(() => {
    dispatch(totals())
    handleDeliveryPrice(delivery)
  }, [product, delivery])

  useEffect(() => {
    getCartData()
  }, [item])

  return (
    <>
      <header className='py-10 bg-[#273c67]'>
        <h1 className='m-0 text-white font-bold text-4xl text-center'>
          CHECKOUT FORM
        </h1>
        <div className='flex justify-center mt-6'>
          <Link to={'/cart'}>
            <button className='bg-[#192b4c] text-white p-2 rounded-md font-bold text-lg text-center '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                class='w-6 h-6 inline-block mr-2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
              </svg>
              BACK TO CART
            </button>
          </Link>
        </div>
      </header>
      <div className='pb-40 bg-[#e0dedd] px-20 py-4 text-[#645957]'>
        <div className='p-3 mb-4 rounded-md bg-white'>
          <div class='flex justify-between'>
            <div class='px-4 pt-8'>
              <h2 class='text-xl font-bold'>ORDER SUMMARY</h2>
              <div class='mt-8 space-y-3 rounded-lg border bg-[#192b4c] px-2 py-4 sm:px-6'>
                {product.cartItems?.map((p) => (
                  <div class='flex flex-col rounded-lg bg-[#192b4c] sm:flex-row'>
                    <img
                      class='m-2 h-24 w-28 rounded-md border object-cover object-center'
                      src={p.image}
                      alt=''
                    />
                    <div class='flex w-full flex-col px-4 py-4'>
                      <span class='font-bold text-white'>{p.name}</span>
                      <span class='float-right text-gray-400'>
                        {p.qty} - {p.cartQuantity}
                      </span>
                      <p class='mt-auto text-lg font-bold text-white'>
                        £{p.price * p.cartQuantity}.00
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p class='mt-8 text-lg font-medium'>Shipping Methods</p>
              <div class='mt-5 grid gap-6'>
                <div class='relative'>
                  <input
                    class='peer hidden'
                    id='radio_1'
                    type='radio'
                    name='radio'
                    value='FedEx'
                    onChange={handleDelivery}
                  />
                  <span class='peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white'></span>
                  <label
                    class='peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4'
                    for='radio_1'
                  >
                    <img
                      class='w-14 object-contain'
                      src='https://1000logos.net/wp-content/uploads/2021/04/Fedex-logo.png'
                      alt=''
                    />
                    <div class='ml-5'>
                      <span class='mt-2 font-semibold'>Fedex Delivery</span>
                      <p class='text-slate-500 text-sm leading-6'>
                        Delivery: 1-2 Days
                      </p>
                    </div>
                  </label>
                </div>
                <div class='relative'>
                  <input
                    class='peer hidden'
                    id='radio_2'
                    type='radio'
                    name='radio'
                    value='UPS'
                    onChange={handleDelivery}
                  />
                  <span class='peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white'></span>
                  <label
                    class='peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4'
                    for='radio_2'
                  >
                    <img
                      class='w-14 object-contain'
                      src='https://1000logos.net/wp-content/uploads/2021/04/UPS-logo.png'
                      alt=''
                    />
                    <div class='ml-5'>
                      <span class='mt-2 font-semibold'>UPS Delivery</span>
                      <p class='text-slate-500 text-sm leading-6'>
                        Delivery: 3-4 Days
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class='mt-10 bg-gray-50 px-4 pt-8 lg:mt-0'>
              <p class='text-xl font-bold'>PAYMENT DETAILS</p>
              <form onSubmit={handleCheckout}>
                <div class=''>
                  <label
                    for='email'
                    class='mt-4 mb-2 block text-sm font-medium'
                  >
                    Email
                  </label>
                  <div class='relative'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formCheckout.email}
                      onChange={setCheckoutValue}
                      class='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-[#f2f2f2] text-[#645957]'
                      placeholder='EMAIL ADDRESS'
                    />
                    <div class='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-4 w-4 text-gray-400'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                        />
                      </svg>
                    </div>
                  </div>
                  <label
                    for='card-holder'
                    class='mt-4 mb-2 block text-sm font-medium'
                  >
                    Card Holder
                  </label>
                  <div class='relative'>
                    <input
                      type='text'
                      id='card-holder'
                      name='full_name'
                      value={formCheckout.full_name}
                      onChange={setCheckoutValue}
                      class='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-[#f2f2f2] text-[#645957]'
                      placeholder='Your full name here'
                    />
                    <div class='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-4 w-4 text-gray-400'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z'
                        />
                      </svg>
                    </div>
                  </div>
                  <label class='mt-4 mb-2 block text-sm font-medium'>
                    Card Details
                  </label>
                  <div class='flex'>
                    <div class='relative w-7/12 flex-shrink-0'>
                      <input
                        type='text'
                        name='no_card'
                        class='w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-[#f2f2f2] text-[#645957]'
                        placeholder='xxxx-xxxx-xxxx-xxxx'
                        value={formCheckout.no_card}
                        onChange={setCheckoutValue}
                      />
                      <div class='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                        <svg
                          class='h-4 w-4 text-gray-400'
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          viewBox='0 0 16 16'
                        >
                          <path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z' />
                          <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z' />
                        </svg>
                      </div>
                    </div>
                    <input
                      type='text'
                      name='mm_yy'
                      value={formCheckout.mm_yy}
                      onChange={setCheckoutValue}
                      class='w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-[#f2f2f2] text-[#645957]'
                      placeholder='MM/YY'
                    />
                    <input
                      type='text'
                      name='cvc'
                      value={formCheckout.cvc}
                      onChange={setCheckoutValue}
                      class='w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-[#f2f2f2] text-[#645957]'
                      placeholder='CVC'
                    />
                  </div>
                  <label
                    for='billing-address'
                    class='mt-4 mb-2 block text-sm font-medium'
                  >
                    Billing Address
                  </label>
                  <div class='flex flex-col sm:flex-row'>
                    <div class='relative flex-shrink-0 sm:w-7/12'>
                      <input
                        type='text'
                        id='billing-address'
                        name='address'
                        value={formCheckout.address}
                        onChange={setCheckoutValue}
                        class='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-[#f2f2f2] text-[#645957]'
                        placeholder='Street Address'
                      />
                      <div class='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                        <img
                          class='h-4 w-4 object-contain'
                          src='https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <select
                      type='text'
                      name='billing-state'
                      class='w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-[#f2f2f2] text-[#645957]'
                      onChange={setCheckoutValue}
                    >
                      <option value={formCheckout.state}>State</option>
                    </select>
                    <input
                      type='text'
                      name='zip'
                      value={formCheckout.zip}
                      onChange={setCheckoutValue}
                      class='flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-[#f2f2f2] text-[#645957]'
                      placeholder='ZIP'
                    />
                  </div>

                  <div class='mt-6 border-t border-b py-2'>
                    <div class='flex items-center justify-between'>
                      <p class='text-sm font-medium text-gray-900'>Subtotal</p>
                      <p class='font-semibold text-gray-900'>
                        £{product.cartTotalPrice}.00
                      </p>
                    </div>
                    <div class='flex items-center justify-between'>
                      <p class='text-sm font-medium text-gray-900'>Shipping</p>
                      <p class='font-semibold text-gray-900'>
                        £{deliveryPrice}.00
                      </p>
                    </div>
                  </div>
                  <div class='mt-6 flex items-center justify-between'>
                    <p class='text-sm font-medium text-gray-900'>Total</p>
                    <p class='text-2xl font-semibold text-gray-900'>
                      £{product.cartTotalPrice + deliveryPrice}.00
                    </p>
                  </div>
                </div>
                <button
                  type='submit'
                  class='bg-[#ffc600] text-[#192b4c] mt-4 mb-8 w-full rounded-md font-bold px-6 py-3'
                >
                  PLACE ORDER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
