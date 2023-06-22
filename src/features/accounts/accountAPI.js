import axios from 'axios';

export function fetchAccounts() {
    return axios.get('http://localhost:8080/accounts');
}

export function postAccount(account) {
    return axios.post('http://localhost:8080/account', account);
}
