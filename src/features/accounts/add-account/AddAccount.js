import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustomerId } from './../../customer/customerSlice';
import { addAccountAsync } from './../accountSlice';
import './AddAccount.css';


const AddAccount = () => {
    const dispatch = useDispatch();
    const customerId = useSelector(selectCustomerId);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const addAccount = (customerId, data) => {
        dispatch(addAccountAsync({customerId, accountName: data.accountName}));
    };
    
    return (
        <div className="add-account">
            <h2>Create new account</h2>
            <form onSubmit={handleSubmit((data) => addAccount(customerId, data))}>
                <small>Account name</small>
                <div>
                    <input 
                        {...register('accountName', {
                            required: true,
                            validate: (value) => value.length >= 3
                        })} />
                        {errors.accountName &&
                            <p className="text-red">Account name is required and must be more than 3 characters.</p>
                        }
                </div>
                <input type="submit" className="element-bg" />
            </form>
        </div>
    );
}

export default AddAccount; 