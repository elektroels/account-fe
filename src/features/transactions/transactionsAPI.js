import axios from 'axios';

export function fetchTransactions(accountId) {
    return axios.get(`http://localhost:8080/account/${accountId}/transactions`);
}

export function fetchTransactionsPeriod(accountId, from, to) {
    return axios.get(`http://localhost:8080/account/${accountId}/transactions?from=${from}&to=${to}`);
}
