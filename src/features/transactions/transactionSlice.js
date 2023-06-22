import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTransactions } from './transactionsAPI';

const initialState = {
  transactions: [],
};

export const getTransactionsAsync = createAsyncThunk(
  'transaction/fetchTransactions',
  async (accountId) => {
    const response = await fetchTransactions(accountId);
    return response.data;;
  }
);

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionsAsync.fulfilled, (state, action) => {
        state.transactions = action.payload;
      });
  },
});

export const selectTransactions = (state) => state.transaction.transactions;

export default transactionSlice.reducer;
