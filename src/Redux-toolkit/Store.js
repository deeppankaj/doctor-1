import { configureStore } from '@reduxjs/toolkit'
import { cartSlicevalue } from './Slices/CartSlice'

export const store = configureStore({
  reducer: {
    Cart: cartSlicevalue,
  },
})