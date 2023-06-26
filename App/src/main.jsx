import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productReducer from './fetures/Product.jsx'
import AuthSlice from './fetures/AuthSlice.jsx'
import { CheckoutSlice } from './fetures/CheckoutSlice.jsx'

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: AuthSlice,
    checkout: CheckoutSlice,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
