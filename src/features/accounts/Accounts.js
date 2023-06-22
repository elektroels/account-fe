import Account from './account/Account';
import './Accounts.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAccountAsync, getAccountsAsync, selectAccounts } from './accountSlice';
import { selectCustomerId } from './../counter/counterSlice';


const Accounts = () => {
    const dispatch = useDispatch()
    const accounts = useSelector(selectAccounts);
    const customerId = useSelector(selectCustomerId);
    const accountsUI = accounts?.map( account => <Account account={ account } key={account.id}></Account>);
    useEffect(() => { dispatch(getAccountsAsync(customerId)) }, [dispatch, customerId]);

    const accountName = "testName";

    function addAccount(customerId, accountName) {
        dispatch(addAccountAsync({customerId, accountName}));
    };
    
    return (
        <>
            <h1>Accounts</h1>
            <div className="accounts">
                { accountsUI }
            </div>
            <div>
                <button 
                    className="element-bg"
                    onClick={() => addAccount(customerId, accountName)}>
                        Add account
                    </button>
                </div>
        </>
    )
}

export default Accounts;