import Account from './account/Account';
import AddAccount from './add-account/AddAccount';
import './Accounts.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAccountsAsync, selectAccounts } from './accountSlice';
import { selectCustomerId } from './../customer/customerSlice';


const Accounts = () => {
    const dispatch = useDispatch()
    const accounts = useSelector(selectAccounts);
    const customerId = useSelector(selectCustomerId);
    const accountsUI = accounts?.map( account => <Account account={ account } key={account.id}></Account>);
    useEffect(() => { dispatch(getAccountsAsync(customerId)) }, [dispatch, customerId]);

    return (
        <>
            <h1>Accounts</h1>
            <div className="accounts">
                { accountsUI }
            </div>
            <AddAccount />
        </>
    )
}

export default Accounts;