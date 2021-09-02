import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import '../App.css'



export const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    
    const transactionAmounts = transactions.map((transaction: { transactionAmount: any; }) => transaction.transactionAmount);

    const balance = transactionAmounts.reduce((acc: any, item: any) => (acc += item), 0).toFixed(2);

    return (
        <div className="balance"> 
        <h4>Current Balance</h4> 
        <h1>${balance}</h1> 
        </div>
    )
}
