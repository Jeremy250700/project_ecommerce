import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import AdminFooter from '../admin_components/AdminFooter'
export default function Layout() {
  const isAdmin = useSelector((state) => state.auth.user.role === 'admin')
  if (isAdmin) {
    return (
      <>
        <Navbar />
        <Outlet />
        <AdminFooter />
      </>
    )
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
