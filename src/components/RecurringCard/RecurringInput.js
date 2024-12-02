'use client'

import { useContext } from "react";
import CancelButton from "../CancelButton/CancelButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SaveButton from "../SaveButton/SaveButton";
import { DisplayContext } from "@/context/DisplayContextProvider";
import { TransactionInputContext } from "@/context/TransactionContextProvider";

export default function RecurringInput(){
    const {display, setDisplay} = useContext(DisplayContext);
    const {transactionInput, setTransactionInput} = useContext(TransactionInputContext);

    const handleChange = (e) => {
        setTransactionInput({...transactionInput, [e.target.name]: e.target.value})
    }

    if (display !== "Recurring") return null;

    return(
        <div>
            <form  className="recurringInput">
                <div className="row">
                    {/* circle */}
                    <label>Cash Flow:</label>
                    <DropdownMenu className={"recurringCashflow"} dropdownType={"cashflow"} targetState={"transaction"}></DropdownMenu>
                </div>
                <div className="threeColumnRow row">
                    <div className="inputColumns">
                        <label>Description:</label>
                        <input required name="description" type="text" onChange={handleChange}></input>
                    </div>
                    <div className="inputColumns">
                        <label>Pay Type:</label>
                        <DropdownMenu dropdownType={"payType"} targetState={"transaction"}></DropdownMenu>
                    </div>
                    <div className="inputColumns">
                        <label>Date:</label>
                        <input type="date"></input>
                    </div>
                </div>
                <div className="twoColumnRow row">
                    <div className="inputColumns">
                        <label>Recurring:</label>
                        <DropdownMenu dropdownType={"recurring"} targetState={"transaction"}></DropdownMenu>
                    </div>
                    <div className="inputColumns">
                        <label>Amount:</label>
                        <input required name="amount" type="number" onChange={handleChange}></input>
                    </div>
                </div>
                <div className="twoColumnRow row">
                    <div className="inputColumns">
                        <label>Custom Tags:</label>
                        <DropdownMenu dropdownType={"tag"} targetState={"transaction"}></DropdownMenu>
                    </div>
                    <div className="inputColumns">
                        <label>Category:</label>
                        <DropdownMenu dropdownType={"category"} targetState={"transaction"}></DropdownMenu>
                    </div>
                </div>
                <div className="recurUiButtons row">
                    <CancelButton></CancelButton>
                    <SaveButton></SaveButton>
                </div>
            </form>
            
        </div>
    )
}