import React from 'react'
import { Grid } from '@material-ui/core';
import '../App.css';

const Header = () => {
    return (
        <div className="heading">
            <Grid item xs = {12}> 
            <h1> Decentralized Expense Tracker </h1>
            </Grid>
        </div>
    )
}

export default Header
