import axios from 'axios';

export function fetchTransactions(accountId) {
    return axios.get(`http://localhost:8080/account/${accountId}/transactions`);
}
