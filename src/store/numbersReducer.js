import { createSlice } from '@reduxjs/toolkit'

export const numbersSlice = createSlice({
  name: 'numbers',
  initialState: {
    min: 0,
    max: 10
  },
  reducers: {
    incrementMin: (state, action) => {
      state.min = action.payload;
    },
    incrementMax: (state, action) => {
      state.max = action.payload;
    }
  }
})

export const { incrementMin, incrementMax } = numbersSlice.actions
export const numbersReducer = numbersSlice.reducer
