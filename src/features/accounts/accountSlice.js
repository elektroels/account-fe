import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAccounts, postAccount } from './accountAPI';

const initialState = {
  accounts: [],
};

export const getAccountsAsync = createAsyncThunk(
  'account/fetchAccounts',
  async (customerId) => {
    const response = await fetchAccounts(customerId);
    return response.data;;
  }
);

export const addAccountAsync = createAsyncThunk(
  'account/addAccount',
  async (newAccount) => {
    const response = await postAccount(newAccount);
    return response.data;;
  }
);

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAccountsAsync.fulfilled, (state, action) => {
        state.accounts = action.payload;
      })
      .addCase(addAccountAsync.fulfilled, (state, action) => {
        state.accounts = action.payload;
      });
  },
});

export const selectAccounts = (state) => state.account.accounts;

export default accountSlice.reducer;
