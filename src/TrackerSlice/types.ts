
export interface Transaction {
    id: number, 
    description: string, 
    transactionAmount: number
}
export interface State {
    transactions : Transaction[],
    sign: boolean
}

export interface addTransectionType {
    transaction: Transaction
}

export interface deleteTransectionType {
        id: number
}