'use client'

import { useContext } from "react";
import GoalCard from "./GoalCard"
import GoalInput from "./GoalInput";
import { GoalContext } from "@/context/GoalContextProvider";
import { DisplayContext } from "@/context/DisplayContextProvider";
import { TransactionsContext } from "@/context/TransactionContextProvider";

export default function Goals () {

    const { setDisplay } = useContext(DisplayContext);
    const { goals, setGoals } = useContext(GoalContext);
    const { transactions } = useContext(TransactionsContext);

    const getCurrentMonth = () => {
        const date = new Date();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[date.getMonth()];
    };

    function populateGoals (){
        return goals.map((goal, index)=> <GoalCard key={index} goal={goal} allTransactions={transactions}></GoalCard>)
    }
    
    
    return (
        <div className="goals">
            <h4>{getCurrentMonth()} Goals</h4>
            <div className="goalCardContainer">
                {populateGoals()}
            </div>
            <GoalInput onSubmitted={()=>{setDisplay(null)}}></GoalInput>
        </div>
    )
}