'use client'

import { createContext, useState } from "react"

export const GoalInputContext = createContext(null);

export function GoalInputProvider({children}){
    const [goalInput, setGoalInput] = useState({})

    return(
        <GoalInputContext.Provider value={{goalInput, setGoalInput}}>
            { children }
        </GoalInputContext.Provider>
    )
}

export const GoalContext = createContext(null);

export function GoalProvider({ children }){

    const [goals, setGoals] = useState([
        {
            cashflow: "Income",
            amount: "2890",
            title: "Income",
            startDate: "2024-12-01",
            endDate: "2024-12-31",
            category: "None",
            tag: ["None"]
        },
        {
            cashflow: "Expense",
            amount: "2300",
            title: "Expense",
            startDate: "2024-12-01",
            endDate: "2024-12-31",
            category: "None",
            tag: ["None"]
        },
        {
            cashflow: "Income",
            amount: "1200",
            title: "Tanner's Income",
            startDate: "2024-12-01",
            endDate: "2024-12-31",
            category: "Paycheck",
            tag: ["Tanner"]
        }
    ])

    return(
        <GoalContext.Provider value={{goals, setGoals}}>
            { children }
        </GoalContext.Provider>
    )
}