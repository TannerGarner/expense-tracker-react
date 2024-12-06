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
    const  [transactions, setTransactions] = useState([
        {
            cashflow: "Income",
            amount: "1800",
            description: "Pay",
            date: "2024-12-11",
            category: "Paycheck",
            tag: "Essential"
        },
        {
            cashflow: "Expense",
            amount: "60",
            description: "Shell Gas",
            date: "2024-12-12",
            category: "Gas",
            tag: "Essential"
        },
        {
            cashflow: "Expense",
            amount: "1200",
            description: "Rent",
            date: "2024-12-01",
            category: "Home",
            tag: "Essential"
        },
        {
            cashflow: "Income",
            amount: "24",
            description: "Venmo",
            date: "2024-12-15",
            category: "Misc",
            tag: "None"
        },
        {
            cashflow: "Expense",
            amount: "150",
            description: "Dom Gas Bill",
            date: "2024-12-15",
            category: "Utilities",
            tag: "Essential"
        },
        {
            cashflow: "Expense",
            amount: "54",
            description: "Maverick Gas",
            date: "2024-12-24",
            category: "Gas",
            tag: "Essential"
        },
    ])
    return(
        <TransactionsContext.Provider value={{transactions, setTransactions}}>
            { children }
        </TransactionsContext.Provider>
    )
}