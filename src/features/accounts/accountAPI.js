import axios from 'axios';

export function fetchAccounts(customerId) {
    return axios.get (`http://localhost:8080/${customerId}/accounts`);
}

export function postAccount(account) {
    return axios.post('http://localhost:8080/account', account);
}
