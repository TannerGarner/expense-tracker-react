'use client'

import { createContext, useState } from "react"

export const GoalContext = createContext(null);

export default function GoalProvider({ children }){

    const [goal, setGoal] = useState(
        {
            title: null,
            tags: [],
            amount: null,
            actual: null
        }   
    )

    return(
        <GoalContext.Provider value={goal}>
            { children }
        </GoalContext.Provider>
    )
}