import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customerId: 1
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  extraReducers: (builder) => {},
});

export const selectCustomerId = (state) => state.customer.customerId;

export default customerSlice.reducer;
