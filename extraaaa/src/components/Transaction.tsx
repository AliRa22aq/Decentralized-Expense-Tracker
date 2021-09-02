import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import '../App.css';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';


export const Transaction = ({ transaction }: any) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount >= 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';



    return (
        <div>
        <li className={transactionType}>
                {transaction.description}
                <span>{sign}${Math.abs(transaction.transactionAmount)}</span>

                <button className='delete-btn' onClick={() => delTransaction(transaction.id)}> <DeleteRoundedIcon /> </button>


            </li>

        </div>
    )
}
