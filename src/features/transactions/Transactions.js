import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionsPeriodAsync,
         selectTransactions,
         selectFromDate,
         selectToDate } from './transactionSlice';
import Transaction from './transaction/Transaction';
import Period from './period/Period';


const Transactions = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const from = useSelector(selectFromDate);
    const to = useSelector(selectToDate);

    useEffect(() => { 
        dispatch(getTransactionsPeriodAsync({ accountId: id, from, to })) 
    }, [dispatch, id, from, to]);

    const transactions = useSelector(selectTransactions);
    const transactionsUI = transactions?.map( transaction => <Transaction transaction={transaction} key={transaction.id} />);

    return (
        <>
            <h1>Transactions</h1>
            <Period />
            { transactionsUI }
        </>
    )
}

export default Transactions;
