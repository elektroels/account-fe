import './Period.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux';
import { changeFromDate, changeToDate, selectFromDate, selectToDate } from '../transactionSlice';


const Period = () => {
    const dispatch = useDispatch();
    const from = useSelector(selectFromDate);
    const to = useSelector(selectToDate);

    return (
        <div className="period">
            <div>
                <small>From date</small>
                <DatePicker selected={new Date(from)} onChange={(date) => dispatch(changeFromDate(date.toISOString().slice(0, 10)))} />
            </div>
            <div>
                <small>To date</small>
                <DatePicker selected={new Date(to)} onChange={(date) => dispatch(changeToDate(date.toISOString().slice(0, 10)))} />
            </div>
        </div>
    );
}

export default Period;