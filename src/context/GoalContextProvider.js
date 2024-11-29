'use client'

import { createContext, useState } from "react"

export const GoalContext = createContext(null);

export default function GoalProvider({ children }){

    const [goal, setGoal] = useState({})

    return(
        <GoalContext.Provider value={{goal, setGoal}}>
            { children }
        </GoalContext.Provider>
    )
}