import React from 'react'
import {Transaction} from './Transaction'
import '../App.css'
import { useSelector } from 'react-redux';
import { State, Transaction as Trans } from '../TrackerSlice/types';



export const TransactionHistory = () => {

    const transactions = useSelector((state: any) => state.transactions.transactions);

    return (
        <div className='history'>
            <h3> Transaction History </h3>
            <ul className="list">
                {
                    transactions.map((transaction: Trans) => 
                        <Transaction key={transaction.id} transaction = {transaction} />)
                }
            </ul>
        </div>
    )
}
