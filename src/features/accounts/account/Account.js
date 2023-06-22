import './Account.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Account = ({ account }) => {
    const [show, setShow] = useState(false);
    const toggle = () => { setShow(!show) };

    return (
        <div className="account">
            <div
                className="account__name"
                onClick={() => toggle()}>
                { account.accountName }
            </div>

            { show && 
                <div className="account__details">
                    <div>Balance: { account.balance }</div>
                    <div>
                        <Link to={account.id+'/transactions'}>
                            <button className="element-bg">
                                History
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Account