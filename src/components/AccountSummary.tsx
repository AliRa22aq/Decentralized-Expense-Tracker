import React, { useContext } from 'react'
import '../App.css'
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { State, Transaction } from '../TrackerSlice/types';


const AccountSummary = () => {

    const transactions = useSelector((state: any) => state.transactions.transactions);
    const transactionAmounts = transactions.map((transaction: Transaction) => transaction.transactionAmount);

    const income = transactionAmounts
        .filter((transaction: number) => transaction > 0)
        .reduce((acc: any, transaction: any) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter((transaction: number) => transaction < 0)
        .reduce((acc: any, transaction: any) => (acc += transaction), 0)
        ).toFixed(2);


    return (
        <Grid container className='summary'> 
        <Grid item xs={6} >
            <div className="income-border">
                <h2>  Income </h2>
                <p> $ {income} </p>

            </div> 

        </Grid>
        <Grid item xs={6} >
            <div className="expense-border"> 

                <h2> Expense </h2>
                <p> $ {expense} </p>

            </div>
        </Grid>
        </Grid>
    )
}

export default AccountSummary
