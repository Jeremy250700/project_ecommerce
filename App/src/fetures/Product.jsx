import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    remove(state, action) {
      const nextCartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      )
      state.cartItems = nextCartItems
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    decrease(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (p) => p.id === action.payload.id
      )

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (p) => p.id !== action.payload.id
        )
        state.cartItems = nextCartItems
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    totals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, item) => {
          const { price, cartQuantity } = item
          const itemTotal = price * cartQuantity

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        }
      )
      state.cartTotalPrice = total
      state.cartTotalQuantity = quantity
    },
    clear(state, action) {
      state.cartItems = []
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})
export const { add, remove, decrease, totals, clear } = productSlice.actions
export default productSlice.reducer
