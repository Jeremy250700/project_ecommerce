import triple_decker from '../components/img/p1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { add, decrease, remove, totals } from '../fetures/Product'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cart() {
  const product = useSelector((state) => state.product)
  const user = useSelector((state) => state.auth.user)
  const [carts, setCarts] = useState()
  const dispatch = useDispatch()

  const handleRemoveFromCart = (p) => {
    axios.delete(`http://localhost:3001/carts/${p.id}`)
    dispatch(remove(p))
  }
  const handleDecrease = (p) => {
    if (p.quantity == 1) {
      axios.delete(`http://localhost:3001/carts/${p.id}`)
    } else {
      axios.patch(`http://localhost:3001/carts/${p.id}`, {
        quantity: p.quantity - 1,
      })
    }
    dispatch(decrease(p))
  }
  const handleIncrease = (p) => {
    axios.patch(`http://localhost:3001/carts/${p.id}`, {
      quantity: p.quantity + 1,
    })
    dispatch(add(p))
  }
  const getCart = async () => {
    const item = await axios.get(
      `http://localhost:3001/carts/?userId=${user.id}&_expand=proteinEnergySnack`
    )
    setCarts(item.data)
  }

  useEffect(() => {
    dispatch(totals())
  }, [product])

  useEffect(() => {
    getCart()
  }, [carts])
  return (
    <>
      <header className='py-16 bg-[#273c67]'>
        <h1 className='m-0 text-white font-bold text-4xl text-center'>
          {user.username} CART
        </h1>
      </header>
      <div className='pb-40 bg-[#e0dedd] px-20 py-4 text-[#645957]'>
        <div className='p-3 mb-4 rounded-md bg-white'>
          {product.cartItems.length === 0 ? (
            <div className='p-5 font-bold'>Your shopping cart is empty</div>
          ) : (
            <table className='mb-10 w-full border-separate border-spacing-y-3 p-5'>
              <thead>
                <tr>
                  <th className='p-5 text-xl'></th>
                  <th className='p-5 text-xl text-left'>PRODUCT</th>
                  <th className='p-5 text-xl'>PRICE</th>
                  <th className='p-5 text-xl'>TOTAL</th>
                  <th className='p-5 text-xl'></th>
                </tr>
              </thead>
              <tbody>
                {carts?.map((p) => (
                  <tr key={p.id}>
                    <td className='relative w-36 p-0'>
                      <img
                        src={p.proteinEnergySnack.image}
                        alt=''
                        className='rounded-md'
                      />
                    </td>
                    <td className='py-2 px-5 font-bold bg-[#f2f2f2]'>
                      <p className='block mb-3 text-2xl'>
                        {p.proteinEnergySnack.name}
                      </p>
                      <p className='block mb-3'>{p.proteinEnergySnack.qty}</p>
                      <div className='flex-row items-center'>
                        <div className='flex'>
                          <button
                            className='flex items-center w-10 bg-[#ffc600] rounded-l-md text-[#192b4c] justify-center p-1'
                            onClick={() => handleDecrease(p)}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              stroke='currentColor'
                              class='w-6 h-6'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
                              />
                            </svg>
                          </button>
                          <input
                            type='number'
                            readOnly
                            value={p.quantity}
                            className='h-auto p-2 border-none w-[3.125rem] bg-[#e0dedd] 
                                    text-[#645957] font-bold text-xl text-center'
                          />

                          <button
                            className='flex items-center w-10 bg-[#ffc600] rounded-r-md text-[#192b4c] justify-center p-1'
                            onClick={() => handleIncrease(p)}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              stroke='currentColor'
                              class='w-6 h-6'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className='p-5 font-bold bg-[#f2f2f2] text-center'>
                      <p className='block mb-3 text-2xl'>
                        £{p.proteinEnergySnack.price}.00
                      </p>
                    </td>
                    <td className='p-5 font-bold bg-[#f2f2f2] text-center'>
                      <p className='block mb-3 text-2xl'>
                        £{p.proteinEnergySnack.price * p.quantity}.00
                      </p>
                    </td>
                    <td className='p-5 font-bold bg-[#f2f2f2]'>
                      <button
                        className='rounded-md flex items-center justify-center w-9 h-9 bg-[#ffc600]'
                        onClick={() => handleRemoveFromCart(p)}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {product.cartItems.length === 0 ? (
            <div></div>
          ) : (
            <div className='flex justify-between px-5 pb-6'>
              <div>
                <button className='rounded-md bg-[#ffc600] text-[#192b4c] text-base text-center font-bold py-2 px-5'>
                  USE PROMO CODE
                </button>
              </div>

              <div className='text-[#645957] text-2xl font-bold'>
                <h1>TOTAL: £{product.cartTotalPrice}.00</h1>
              </div>
            </div>
          )}
        </div>

        <div className='bg-[#273c67] p-5 rounded-md flex justify-between'>
          <div>
            <Link to={'/'}>
              <button className='bg-[#192b4c] text-white p-3 rounded-md font-bold text-lg text-center '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='3'
                  stroke='currentColor'
                  class='w-6 h-6 inline-block mr-2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                  />
                </svg>
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>

          {product.cartItems.length === 0 ? (
            <div></div>
          ) : (
            <div>
              <Link to={'/checkout'}>
                <button className='bg-[#ffc600] text-[#192b4c]  p-3 rounded-md font-bold text-lg text-center'>
                  CHECKOUT SECURELY
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='3'
                    stroke='currentColor'
                    class='w-6 h-6 inline-block ml-2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
