'use client'

import { createContext, useState } from "react"

export const TransactionContext = createContext(null);

export default function TransactionProvider({ children }){

    const [transaction, setTransaction] = useState(
        {
            isRecurring: false,
            tags: [],
            payMethod: '',
            dueDate: '',
            date: '',
            description: '',
            category: '',
            amount: null,
        }   
    )

    return(
        <TransactionContext.Provider value={transaction}>
            { children }
        </TransactionContext.Provider>
    )
}