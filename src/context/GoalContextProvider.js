'use client'

import { createContext, useState } from "react"

export const GoalContext = createContext(null);

export function GoalProvider({ children }){

    const [goals, setGoals] = useState([])

    return(
        <GoalContext.Provider value={{goals, setGoals}}>
            { children }
        </GoalContext.Provider>
    )
}

export const GoalInputContext = createContext(null);

export function GoalInputProvider({children}){
    const [goalInput, setGoalInput] = useState({})

    return(
        <GoalInputContext.Provider value={{goalInput, setGoalInput}}>
            { children }
        </GoalInputContext.Provider>
    )
}