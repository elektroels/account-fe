import './Account.css'
import { Link } from "react-router-dom"

const Account = ({ account }) => {
    const toggle = () => {
        console.log('toggle')
    }

    return (
        <div className="account">
            <div className="account__name" onClick={() => toggle}>{ account.accountName }</div>
            <div className="account__details">
                <div>Balance: { account.balance }</div>
                <div>
                    <button>
                        <Link to={account.id+'/transactions'}>Show history</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Account