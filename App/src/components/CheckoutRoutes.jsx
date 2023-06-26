import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function CheckoutRoutes() {
  const cart = useSelector((state) => state.product)

  if (cart.cartItems.length === 0) {
    return <Navigate to='/' />
  }
  return <Outlet />
}
