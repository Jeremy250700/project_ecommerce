import triple_decker from './img/p1.jpg'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../fetures/Product'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Card({ name, qty, price, image, id }) {
  const user = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const hadnleGoToDetail = (id) => {
    navigate({
      pathname: `/produk/${id}`,
      search: createSearchParams({ id, name, qty, price, image }).toString(),
    })
  }
  const produk = { id, name, qty, price, image }

  const dispatch = useDispatch()
  const [cartData, setCartData] = useState({
    userId: user.user.id,
    proteinEnergySnackId: produk.id,
    quantity: 1,
  })
  const handleAddToCart = async (produk) => {
    if (user.token !== '') {
      let item = await axios.get(
        `http://localhost:3001/carts/?userId=${user.user.id}&proteinEnergySnackId=${produk.id}`
      )
      let thereIsNoData = item.data.length == 0
      if (thereIsNoData) {
        await axios.post('http://localhost:3001/carts', cartData)
      } else {
        let newQuantity = item.data[0].quantity + 1
        axios.patch(`http://localhost:3001/carts/${item.data[0].id}`, {
          quantity: newQuantity,
        })
      }
    }
    dispatch(add(produk))
  }

  return (
    <>
      <div>
        <div className='w-full mb-5 rounded-md'>
          <img
            onClick={() => hadnleGoToDetail(id)}
            src={image}
            alt=''
            className='rounded-t-md w-full h-[17.5rem] bg-white bg-no-repeat bg-center bg-cover'
          />
          <div className='rounded-b-md p-[0.625rem] bg-white'>
            <div className='block h-[5rem] text-[#645957] no-underline'>
              <div className='text-base font-bold'>{name}</div>
              <div className='text-base'>{qty}</div>
            </div>
            <div className='flex items-center justify-between font-bold text-[#192b4c]'>
              <div>
                <div className='text-xl'>£{price}.00</div>
              </div>

              <button
                className='inline-block p-3 rounded-md bg-[#ffc600] text-base leading-4 text-center no-underline'
                onClick={() => handleAddToCart(produk)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
