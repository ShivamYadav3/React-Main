import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },
  reducers: {
    addAction: (state, action) => {
      state.value = +action.payload.number1 + +action.payload.number2;
    },
    subtract: (state, action) => {
      state.value = +action.payload.number1 - +action.payload.number2;
    },
    multiply: (state, action) => {
      state.value = +action.payload.number1 * +action.payload.number2;
    },
    divide: (state, action) => {
      state.value = +action.payload.number1 / +action.payload.number2;
    },
    clearAll: (state, action) => {
      state.value = 0;
    },
  },
});

export const { addAction, subtract, multiply, divide, clearAll } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
