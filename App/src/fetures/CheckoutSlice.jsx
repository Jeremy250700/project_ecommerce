import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const CheckoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    add_data(state, action) {
      const temptData = { ...action.payload }
      state.data.push(temptData)
    },
  },
})
export const { add_data } = CheckoutSlice.actions
export default CheckoutSlice.reducer
