'use client'

import { useContext } from "react"
import CancelButton from "../CancelButton/CancelButton"
import SaveButton from "../SaveButton/SaveButton"
import { DisplayContext } from "@/context/DisplayContextProvider"
import { GoalContext } from "@/context/GoalContextProvider"

export default function GoalInput() {
    const {display, setDisplay} = useContext(DisplayContext);
    const {goal, setGoal} = useContext(GoalContext);

    let categories = ["Home", "Utilities", "Paycheck"]
    let tags = ["Essential", "Tech", "user1", "user2", "Fun"]

    let dateOptions = ["Today","Weekly","Monthly","Annually"]

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
                    <input required type="number" name="goalAmount" placeholder="$1,500" id="goalAmount" onChange={handleChange}></input>
                </div>
                <div className="whatToWatch">
                    <p>What to Watch: </p>
                    <select required name="goalCashflow" onChange={handleChange}>
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                    <select name="goalCategory" onChange={handleChange}>
                        {categories.map((str , index)=>{ 
                            return<option key={index}>{str}</option>
                        })}
                    </select>
                    <select name="goalTags" onChange={handleChange}>
                        {tags.map((str , index)=>{ 
                            return<option key={index}>{str}</option>
                        })}
                    </select>

                    {/* Date picker? */}
                </div>
                <div>
                    <label htmlFor="goalDateOptions">Recurring: </label>
                    <select name="goalRecurring" id="goalDateOptions" onChange={handleChange}>
                        {dateOptions.map((str , index)=>{ 
                            return<option key={index}>{str}</option>
                        })}
                    </select>
                </div>
                <div className="goalButtons">
                    <CancelButton></CancelButton>
                    <SaveButton></SaveButton>
                </div>
            </form>
        </div>
    )
}