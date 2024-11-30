'use client'

import { useContext } from "react";
import CancelButton from "../CancelButton/CancelButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SaveButton from "../SaveButton/SaveButton";
import { DisplayContext } from "@/context/DisplayContextProvider";
import { TransactionContext } from "@/context/TransactionContextProvider";
import { GoalContext } from "@/context/GoalContextProvider";

export default function RecurringInput(){
    const {display, setDisplay} = useContext(DisplayContext);
    const {transaction, setTransaction} = useContext(TransactionContext);
    const {goal, setGoal} = useContext(GoalContext);

    const handleChange = (e) => {
        setTransaction({...transaction, [e.target.name]: e.target.value})
    }

    if (display !== "Recurring") return null;

    return(
        <div className="recurringInput">
            <form>
                <div>
                    {/* circle */}
                    <label>Cash Flow:</label>
                    <DropdownMenu dropdownType={"cashflow"} targetState={"transaction"}></DropdownMenu>
                </div>
                <div>
                    <div className="inputColumns">
                        <label>Description:</label>
                        <input name="description" onChange={handleChange}></input>
                    </div>
                    <div className="inputColumns">
                        <label>Pay Type:</label>
                        <DropdownMenu dropdownType={"payType"} targetState={"transaction"}></DropdownMenu>
                    </div>
                    {/* calendar */}
                </div>
                <div>
                    <div className="inputColumns">
                        <label>Recurring:</label>
                        <DropdownMenu dropdownType={"recurring"} targetState={"transaction"}></DropdownMenu>
                    </div>
                    <div className="inputColumns">
                        <label>Amount:</label>
                        <input></input>
                    </div>
                </div>
                <div>
                    <div className="inputColumns">
                        <label>Custom Tags:</label>
                        <DropdownMenu dropdownType={"tag"} targetState={"transaction"}></DropdownMenu>
                    </div>
                    <div className="inputColumns">
                        <label>Category:</label>
                        <DropdownMenu dropdownType={"category"} targetState={"transaction"}></DropdownMenu>
                    </div>
                </div>
                <div className="recurUiButtons">
                    <CancelButton></CancelButton>
                    <SaveButton></SaveButton>
                </div>
            </form>
            
        </div>
    )
}