import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionsAsync, selectTransactions } from './transactionSlice';

const Transactions = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getTransactionsAsync(id)) }, [dispatch]);
    const transactions = useSelector(selectTransactions);
    console.log(transactions);
    const transactionsUI = transactions?.map( transaction => <p key={transaction.id}>{transaction.amount}</p>);

    return (
        <>
            Transactions comp for account med id: { id }
            { transactionsUI }
        </>
    )
}

export default Transactions;
