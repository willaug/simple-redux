import { createSlice } from '@reduxjs/toolkit'

export const numbersSlice = createSlice({
  name: 'numbers',
  initialState: {
    min: 0,
    max: 10
  }
})


export const numbersReducer = numbersSlice.reducer
