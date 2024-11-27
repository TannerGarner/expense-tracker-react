'use client'

import { useContext } from "react";
import CancelButton from "../CancelButton/CancelButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SaveButton from "../SaveButton/SaveButton";
import DisplayProvider, { DisplayContext } from "@/context/DisplayContextProvider";

export default function RegTransInput() {
    
    const {display, setDisplay} = useContext(DisplayContext);

    if (display !== "Transaction") return null;

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