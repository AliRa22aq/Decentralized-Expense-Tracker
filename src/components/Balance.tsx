import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux';
import { State, Transaction } from '../TrackerSlice/types';
import store from '../TrackerSlice/store';



export const Balance = () => {

    const transactions = useSelector((state: any) => state.transactions.transactions);
    console.log("transactions ", transactions)
    const transactionAmounts = transactions.map((transaction:Transaction) => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc: any, item: any) => (acc += item), 0).toFixed(2);

    return (
        <div className="balance"> 
        <h4>Current Balance</h4> 
        <h1>${balance}</h1> 
        </div>
    )
}
