import { configureStore } from '@reduxjs/toolkit'
import { numbersReducer } from './numbersReducer'

export default configureStore({
  reducer: {
    numbers: numbersReducer,
  },
})
