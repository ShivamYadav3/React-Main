import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../component/day25/counterslice'
import CalculatorSlice from '../component/day26/Calculator.slice'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    meraCalculator: CalculatorSlice,
  },
})