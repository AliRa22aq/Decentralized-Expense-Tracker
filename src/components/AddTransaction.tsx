import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTransection, changeSign  } from '../TrackerSlice';




export const AddTransaction = () => {

    const dispatch = useDispatch()
    const {checked} = useSelector((state: any) => state.transactions);
    const [description, setDiscription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);


    const handleCheck = () => {
        dispatch(changeSign())
    }

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (!checked) { 
            const newTransaction: { id: number, description: string, transactionAmount: number } = {
                id: new Date().getTime(),
                description,
                transactionAmount: +transactionAmount
            }
            dispatch(addTransection({transaction: newTransaction}));
        } else { 
            const newTransaction: { id: number, description: string, transactionAmount: number } = {
                id: new Date().getTime(),
                description,
                transactionAmount: -transactionAmount
            }
            dispatch(addTransection({transaction: newTransaction}));
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
                    control={<Switch checked={checked} onChange={handleCheck} name="check" />}
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
