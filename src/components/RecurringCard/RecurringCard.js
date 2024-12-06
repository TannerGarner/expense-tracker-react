'use client'

import { useContext } from "react";
import RecurringInput from "./RecurringInput";
import RecurTrans from "./RecurTrans";
import { TransactionsContext } from "@/context/TransactionContextProvider";
import { DisplayContext } from "@/context/DisplayContextProvider";

export default function RecurringCard () {
    const {setDisplay} = useContext(DisplayContext)
    const {transactions, setTransactions} = useContext(TransactionsContext)
    
    let recurringTransactions = transactions.filter((trans) => trans.recurring);

    function populateRecurring(){
        return recurringTransactions.map((recur, index)=> <RecurTrans key={index} recur={recur}></RecurTrans>)
    }
    
    return (
        <div className="recurringCard">
            <h4>Recurring Transactions</h4>
            <i className="ellipsis-vertical"></i>
            <div className="transContainer">
                {populateRecurring()}
            </div>
            <RecurringInput onSubmitted={() => {setDisplay(null)}}></RecurringInput>
        </div>
    )
}