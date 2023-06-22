import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import accountReducer from '../features/accounts/accountSlice';
import transactionReducer from '../features/transactions/transactionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    account: accountReducer,
    transaction: transactionReducer
  },
});
