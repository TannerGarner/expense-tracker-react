'use client'

import { useContext } from "react"
import CancelButton from "../CancelButton/CancelButton"
import SaveButton from "../SaveButton/SaveButton"
import { DisplayContext } from "@/context/DisplayContextProvider"
import { GoalContext } from "@/context/GoalContextProvider"
import DropdownMenu from "../DropdownMenu/DropdownMenu"

export default function GoalInput() {
    const {display, setDisplay} = useContext(DisplayContext);
    const {goal, setGoal} = useContext(GoalContext);

    const handleChange = (e) => {
        setGoal({ ...goal, [e.target.name]: e.target.value });
    };

    if (display !== "Goal") return null;

    return (
        <div className="goalInput">
            <form>
                <div>
                    <label htmlFor="goalTitle">Title:</label>
                    <input required type="text" name="goalTitle" placeholder="Income" id="goalTitle" onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="goalAmount">Goal:</label>
                    <input required type="number" name="goalAmount" placeholder="$3,500" id="goalAmount" onChange={handleChange}></input>
                </div>
                <div className="whatToWatch">
                    <p>What to Watch: </p>
                    <DropdownMenu dropdownType={"cashflow"} targetState={"goal"}></DropdownMenu>
                    <DropdownMenu dropdownType={"category"} targetState={"goal"}></DropdownMenu>
                    <DropdownMenu dropdownType={"tag"} targetState={"goal"}></DropdownMenu>
                    {/* Date picker? */}
                </div>
                <div>
                    <label htmlFor="goalDateOptions">Recurring: </label>
                    <DropdownMenu dropdownType={"recurring"} targetState={"goal"}></DropdownMenu>
                </div>
                <div className="goalButtons">
                    <CancelButton></CancelButton>
                    <SaveButton></SaveButton>
                </div>
            </form>
        </div>
    )
}