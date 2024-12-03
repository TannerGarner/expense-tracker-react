'use client'

import { useContext } from "react";
import GoalCard from "./GoalCard"
import GoalInput from "./GoalInput";
import { GoalContext } from "@/context/GoalContextProvider";
import { DisplayContext } from "@/context/DisplayContextProvider";

export default function Goals () {

    const { setDisplay } = useContext(DisplayContext)
    const { goals } = useContext(GoalContext)

    let month = "November";

    function populateGoals (){
        return goals.map((goal, index)=> <GoalCard key={index} goal={goal}></GoalCard>)
    }
    
    
    return (
        <div className="goals">
            <h4>{month} Goals</h4>
            <div className="goalCardContainer">
                {populateGoals()}
            </div>
            <GoalInput onSubmitted={()=>{setDisplay(null)}}></GoalInput>
        </div>
    )
}