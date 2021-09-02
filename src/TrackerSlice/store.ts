import { configureStore } from '@reduxjs/toolkit'
import transactions from './index'

const store = configureStore({
  reducer: {
    transactions: transactions,
  },
})

export default store

