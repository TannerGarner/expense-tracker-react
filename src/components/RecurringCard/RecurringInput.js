'use client'

import { useContext } from "react";
import CancelButton from "../CancelButton/CancelButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SaveButton from "../SaveButton/SaveButton";
import DisplayProvider, { DisplayContext } from "@/context/DisplayContextProvider";

export default function RecurringInput(){
    const {display, setDisplay} = useContext(DisplayContext);

    if (display !== "Recurring") return null;

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