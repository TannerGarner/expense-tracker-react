import CancelButton from "../CancelButton/CancelButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SaveButton from "../SaveButton/SaveButton";

export default function RecurringInput(){
    return(
        <div className="recurringInput">
            <div>
                {/* circle */}
                <label>Cash Flow:</label>
                <DropdownMenu></DropdownMenu>
            </div>
            <div>
                <div className="inputColumns">
                    <label>Description:</label>
                    <input></input>
                </div>
                <div className="inputColumns">
                    <label>Pay Type:</label>
                    <DropdownMenu/>
                </div>
                {/* calendar */}
            </div>
            <div>
                <div className="inputColumns">
                    <label>Recurring:</label>
                    <DropdownMenu/>
                </div>
                <div className="inputColumns">
                    <label>Amount:</label>
                    <input></input>
                </div>
            </div>
            <div>
                <div className="inputColumns">
                    <label>Custom Tags:</label>
                    <DropdownMenu/>
                </div>
                <div className="inputColumns">
                    <label>Category:</label>
                    <DropdownMenu/>
                </div>
            </div>
            <div className="recurUiButtons">
                <CancelButton></CancelButton>
                <SaveButton></SaveButton>
            </div>
        </div>
    )
}