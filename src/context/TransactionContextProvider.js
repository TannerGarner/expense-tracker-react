'use client'

import { createContext, useState } from "react"

export const TransactionInputContext = createContext(null);

export function TransactionInputProvider({ children }){

    const [transactionInput, setTransactionInput] = useState({})

    return(
        <TransactionInputContext.Provider value={{transactionInput, setTransactionInput}}>
            { children }
        </TransactionInputContext.Provider>
    )
}

export const TransactionsContext = createContext(null)

export function TransactionsProvider( {children} ){
    const  [transactions, setTransactions] = useState([])
    return(
        <TransactionsContext.Provider value={{transactions, setTransactions}}>
            { children }
        </TransactionsContext.Provider>
    )
}