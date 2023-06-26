import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
  const notLogin = useSelector((state) => state.auth.token === '')
  const isAdmin = useSelector((state) => state.auth.user.role === 'admin')
  if (notLogin) {
    return <Navigate to='/login' />
  }
  return <Outlet />
}
