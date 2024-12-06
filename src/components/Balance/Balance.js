'use client'

import { TransactionsContext } from "@/context/TransactionContextProvider";
import { useContext, useMemo } from "react";

export default function Balance () {

    const { transactions } = useContext(TransactionsContext)

    const balance = useMemo(() => {
        let incomeTrans = transactions.filter((trans)=> trans.cashflow == "Income")
        let expenseTrans = transactions.filter((trans)=> trans.cashflow == "Expense")
    
        let totalIncome = incomeTrans.reduce((sum, income) => sum + Number(income.amount), 0)
        let totalExpenses = expenseTrans.reduce((sum, expense) => sum + Number(expense.amount), 0)
    
        return totalIncome - totalExpenses;
    }, [transactions])
    
    return(
        <div className="balance">
            <h4>Your Balance</h4>
            <h2>${balance}</h2>
        </div>
    )
}