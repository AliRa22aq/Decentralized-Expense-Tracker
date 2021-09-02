import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../App.css'



export const AddTransaction = () => {

    const [description, setDiscription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);

    const { addTransaction, check, singCheck } = useContext(GlobalContext);

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (!check) { 
            const newTransaction: { id: number, description: string, transactionAmount: number } = {
                id: new Date().getTime(),
                description,
                transactionAmount: +transactionAmount
            }
            addTransaction(newTransaction);
        } else { 
            const newTransaction: { id: number, description: string, transactionAmount: number } = {
                id: new Date().getTime(),
                description,
                transactionAmount: -transactionAmount
            }
            addTransaction(newTransaction);
        }

    }

    return (
        <div onSubmit={onSubmit} className='addtransaction'>
            <h3> Add New Transaction </h3>
            <form>


                <div className="form-control">
                    <label className='opposite1'> Description of Transaction </label>
                    <input
                        required
                        type="text"
                        id="description"
                        placeholder="Transaction details"
                        value={description}
                        onChange={(e) => setDiscription(e.target.value)}

                    />
                </div>

                <div className="form-control">
                    <div className='opposite'> 
                    <label> Amount of Transaction </label>
                     
                    <FormControlLabel
                    control={<Switch checked={check} onChange={singCheck} name="check" />}
                    label="Expense"
                /> </div>
                    <input
                        type="number"
                        id="descriptionAmount"
                        placeholder="Enter Transaction Amount"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(parseInt(e.target.value))}
                        required
                        min={0}
                    />
                </div>
                        <button className='button'> Add Transaction </button>
            </form>
        </div>
    )
}
