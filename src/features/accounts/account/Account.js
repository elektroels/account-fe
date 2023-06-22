import './Account.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Account = ({ account }) => {
    const [show, setShow] = useState(false);
    const toggle = () => { setShow(!show) };

    return (
        <div className="account box-shadow">
            <div
                className="account__name"
                onClick={() => toggle()}>
                { account.accountName }
            </div>

            { show && 
                <div className="account__details">
                    <div className="account__balance">
                        <div>
                            Balance:
                        </div> 
                        <div className={account.balance < 0 ? 'text-red' : ''}>
                            { account.balance }
                        </div> 
                    </div>
                    <div className="account__input">
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