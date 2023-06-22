import './Transaction.css';

const Transaction = ({ transaction }) => {
    return (
        <div className="transaction box-shadow">
            <div>
                <small>Amount</small>
                <div>{ transaction.amount }</div>
            </div>
            <div>
                <small>Time</small>
                <div>{ transaction.timeof }</div>
            </div>
        </div>
    )
}

export default Transaction;