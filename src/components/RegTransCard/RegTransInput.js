import CancelButton from "../CancelButton/CancelButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SaveButton from "../SaveButton/SaveButton";

export default function RegTransInput() {
    

    return (
        <div className="regTransInput">
            <div className="firstRowInputs">
                <span>Date</span>
                <span>Description</span>
                <span>Category</span>
                <span>$Amount</span>
            </div>
            <div className="firstRowInputs">
                <input></input>
                <input></input>
                <DropdownMenu></DropdownMenu>
                <input></input>
            </div>
            <div className="secondRowInputs">
                <span>Custom Tags</span>
                <span>Cashflow</span>
                <CancelButton/>
            </div>
            <div className="secondRowInputs">
                <DropdownMenu></DropdownMenu>
                <DropdownMenu></DropdownMenu>
                <SaveButton/>
            </div>
        </div>
    )
}