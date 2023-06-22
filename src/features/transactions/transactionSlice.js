import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTransactions, fetchTransactionsPeriod } from './transactionsAPI';

const initialState = {
    transactions: [],
    fromDate: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().slice(0, 10),
    toDate: new Date().toISOString().slice(0, 10)
};

export const getTransactionsAsync = createAsyncThunk(
    'transaction/fetchTransactions',
    async (accountId) => {
        const response = await fetchTransactions(accountId);
        return response.data;;
    }
);

export const getTransactionsPeriodAsync = createAsyncThunk(
    'transaction/fetchTransactionsPeriod',
    async ({accountId, from, to}) => {
        const response = await fetchTransactionsPeriod(accountId, from, to);
        return response.data;;
    }
);

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        changeFromDate: (state, action) => {
            state.fromDate = action.payload;
        },
        changeToDate: (state, action) => {
            state.toDate = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTransactionsAsync.fulfilled, (state, action) => {
                state.transactions = action.payload;
            })
            .addCase(getTransactionsPeriodAsync.fulfilled, (state, action) => {
                state.transactions = action.payload;
            });
    },
});

export const selectTransactions = (state) => state.transaction.transactions;
export const selectFromDate = (state) => state.transaction.fromDate;
export const selectToDate = (state) => state.transaction.toDate;

export const { changeFromDate, changeToDate } = transactionSlice.actions;

export default transactionSlice.reducer;
