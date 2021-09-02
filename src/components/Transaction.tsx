import React, {FC} from 'react'
import '../App.css';
// import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
// import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTransection  } from '../TrackerSlice';
import { Transaction as Tprop } from '../TrackerSlice/types';


interface TransactionProps {
    key?: number,
    transaction: Tprop
}

export const Transaction: FC<TransactionProps> = ({ transaction }) => {

    
    const transactions = useSelector((state: any) => state.transactions.transactions);
    console.log("amount ", transactions)

    const dispatch = useDispatch()

    const sign = transaction.transactionAmount >= 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    const handleDelete = (id: number) => {
        dispatch(deleteTransection({id}))
    }

    return (
        <div>
        <li className={transactionType}>
                {transaction.description}
                <span>{sign}${Math.abs(transaction.transactionAmount)}</span>

                {/* <button className='delete-btn' onClick={() => handleDelete(transaction.id)}> <DeleteRoundedIcon /> </button> */}
                <button className='delete-btn' onClick={() => handleDelete(transaction.id)}> X </button>


            </li>

        </div>
    )
}
