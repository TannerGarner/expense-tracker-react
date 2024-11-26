import CancelButton from "../CancelButton/CancelButton"
import SaveButton from "../SaveButton/SaveButton"


export default function GoalInput() {
    
    let categories = ["Home", "Utilities", "Paycheck"]
    let tags = ["Essential", "Tech", "user1", "user2", "Fun"]

    let dateOptions = ["Today","Weekly","Monthly","Annually"]

    return (
        <div className="goalInput">
            <form>
                <div>
                    <label htmlFor="goalTitle">Title:</label>
                    <input required type="text" placeholder="Income" id="goalTitle"></input>
                </div>
                <div>
                    <label htmlFor="goalAmount">Goal:</label>
                    <input required type="number" placeholder="$1,500" id="goalAmount"></input>
                </div>
                <div className="whatToWatch">
                    <p>What to Watch: </p>
                    <select required>
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                    <select>
                        {categories.map((str , index)=>{ 
                            return<option key={index}>{str}</option>
                        })}
                    </select>
                    <select>
                        {tags.map((str , index)=>{ 
                            return<option key={index}>{str}</option>
                        })}
                    </select>

                    {/* Date picker? */}
                </div>
                <div>
                    <label htmlFor="goalDateOptions">Recurring: </label>
                    <select id="goalDateOptions">
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