'use client'

import { useContext } from "react"
import CancelButton from "../CancelButton/CancelButton"
import SaveButton from "../SaveButton/SaveButton"
import { DisplayContext } from "@/context/DisplayContextProvider"
import { GoalContext, GoalInputContext } from "@/context/GoalContextProvider"
import DropdownMenu from "../DropdownMenu/DropdownMenu"

export default function GoalInput({ onSubmitted }) {
    const {display, setDisplay} = useContext(DisplayContext);
    const {goals, setGoals} = useContext(GoalContext);
    const {goalInput, setGoalInput} = useContext(GoalInputContext)

    const handleChange = (e) => {
        setGoalInput({ ...goalInput, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submitted", goalInput)
        setGoals((prevGoals) => [...prevGoals, goalInput])
        // empty the form 
        onSubmitted();
    }

    if (display !== "Goal") return null;

    return (
        <div className="goalInput">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Title:
                        <input required type="text" name="title" placeholder="Income" id="goalTitle" onChange={handleChange}></input>
                    </label>
                    
                </div>
                <div>
                    <label>
                        Goal:
                        <input required type="number" name="amount" placeholder="$3,500" id="goalAmount" onChange={handleChange}></input>
                    </label>
                </div>
                <div className="whatToWatch">
                    <p>What to Watch: </p>
                    <div>
                        <DropdownMenu dropdownType={"cashflow"} targetState={'goal'}></DropdownMenu>
                        <DropdownMenu dropdownType={"category"} targetState={'goal'}></DropdownMenu>
                        <DropdownMenu dropdownType={"tag"} targetState={'goal'}></DropdownMenu>
                    </div>
                </div>
                <div className="datePicker">
                    <p>Date Range:</p>
                    <div className="dateRange">
                        <label>
                            Start:
                            <input required name="startDate" type="date" onChange={handleChange}></input>
                        </label>
                        
                        <label>
                            End:
                            <input required name="endDate" type="date" onChange={handleChange}></input>
                        </label>
                    </div>
                </div>
                <div className="goalButtons">
                    <CancelButton></CancelButton>
                    <SaveButton></SaveButton>
                </div>
            </form>
        </div>
    )
}