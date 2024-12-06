'use client'

import { useContext } from "react";
import CancelButton from "../CancelButton/CancelButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SaveButton from "../SaveButton/SaveButton";
import { DisplayContext } from "@/context/DisplayContextProvider";
import { TransactionInputContext, TransactionsContext } from "@/context/TransactionContextProvider";

export default function RegTransInput({ onSubmitted }) {
    
    const {display, setDisplay} = useContext(DisplayContext);
    const {transactionInput, setTransactionInput} = useContext(TransactionInputContext);
    const {setTransactions} = useContext(TransactionsContext)

    const handleChange = (e) => {
        setTransactionInput({ ...transactionInput, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Reg", transactionInput)
        setTransactions((prevTrans) => [...prevTrans, transactionInput])
        //empty the form?
        setTransactionInput({})
        onSubmitted();
    }

    if (display !== "Transaction") return null;

    return (
        <div className="regTransInput">
            <form onSubmit={handleSubmit}>
                <div className="firstRowInputs">
                    <span>Date</span>
                    <span>Description</span>
                    <span>Category</span>
                    <span>$Amount</span>
                </div>
                <div className="firstRowInputs">
                    <input required name="date" type="date" onChange={handleChange}></input>
                    <input required name="description" type="text" onChange={handleChange}></input>
                    <DropdownMenu dropdownType={"category"} targetState={"transaction"}></DropdownMenu>
                    <input required name="amount" type="number" step={"0.01"} onChange={handleChange}></input>
                </div>
                <div className="secondRowInputs">
                    <span>Custom Tags</span>
                    <span>Cashflow</span>
                    <CancelButton/>
                </div>
                <div className="secondRowInputs">
                    <DropdownMenu dropdownType={"tag"} targetState={"transaction"}></DropdownMenu>
                    <DropdownMenu dropdownType={"cashflow"} targetState={"transaction"}></DropdownMenu>
                    <SaveButton/>
                </div>
            </form>
        </div>
    )
}