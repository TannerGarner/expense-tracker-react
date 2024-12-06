'use client'

import { useContext } from "react";
import CancelButton from "../CancelButton/CancelButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SaveButton from "../SaveButton/SaveButton";
import { DisplayContext } from "@/context/DisplayContextProvider";
import { TransactionInputContext, TransactionsContext } from "@/context/TransactionContextProvider";

export default function RecurringInput({ onSubmitted }){
    const {display} = useContext(DisplayContext);
    const {transactionInput, setTransactionInput} = useContext(TransactionInputContext);
    const { transactions, setTransactions} = useContext(TransactionsContext)

    const handleChange = (e) => {
        setTransactionInput({...transactionInput, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", transactionInput);
        setTransactions((prevTrans) => [...prevTrans, transactionInput])
        setTransactionInput({});
        onSubmitted();
    }

    if (display !== "Recurring") return null;

    return(
        <div>
            <form  className="recurringInput" onSubmit={handleSubmit}>
                <div className="row">
                    {/* circle */}
                    <DropdownMenu className={"recurringCashflow"} dropdownType={"cashflow"} targetState={"transaction"}></DropdownMenu>
                    <input required name="description" placeholder="Description" type="text" onChange={handleChange}></input>
                </div>
                <div className="twoColumnRow row">
                    <DropdownMenu dropdownType={"payType"} targetState={"transaction"}></DropdownMenu>
                    <input required name="date" type="date" onChange={handleChange}></input>
                </div>
                <div className="twoColumnRow row">
                    <DropdownMenu dropdownType={"recurring"} targetState={"transaction"}></DropdownMenu>
                    <input required name="amount" placeholder="Amount" type="number" onChange={handleChange}></input>
                </div>
                <div className="twoColumnRow row">
                    <DropdownMenu dropdownType={"tag"} targetState={"transaction"}></DropdownMenu>
                    <DropdownMenu dropdownType={"category"} targetState={"transaction"}></DropdownMenu>
                </div>
                <div className="recurUiButtons row">
                    <CancelButton></CancelButton>
                    <SaveButton></SaveButton>
                </div>
            </form>
            
        </div>
    )
}