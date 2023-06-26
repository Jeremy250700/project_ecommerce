import Produk from './pages/Produk'
import Detail_Produk from './pages/Detail_Produk'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Admin from './pages/Admin'
import Create from './admin_components/Create'
import Update from './admin_components/Update'
import Read from './admin_components/Read'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PrivateRoutes from './components/privateRoutes'
import GuestRoutes from './components/GuestRoutes'
import Register from './pages/Register'
import AdminRoutes from './admin_components/AdminRoutes'
import Checkout from './pages/Checkout'
import CheckoutRoutes from './components/CheckoutRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Produk />} />

          <Route element={<GuestRoutes />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />}></Route>
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path='/produk/:id' element={<Detail_Produk />} />
            <Route path='/cart' element={<Cart />} />

            <Route element={<CheckoutRoutes />}>
              <Route path='/checkout' element={<Checkout />}></Route>
            </Route>
          </Route>
          <Route path='/admin' element={<Admin />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/read/:id' element={<Read />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
