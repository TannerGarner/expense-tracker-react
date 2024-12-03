'use client'

import { GoalInputContext } from "@/context/GoalContextProvider"
import { TransactionInputContext } from "@/context/TransactionContextProvider"
import { useContext } from "react"

export default function DropdownMenu ({ dropdownType, targetState }) {
    
    const {transactionInput, setTransactionInput} = useContext(TransactionInputContext)
    const {goalInput, setGoalInput} = useContext(GoalInputContext)

    const handleChange = (e) => {
        if (targetState === "transaction") {
            setTransactionInput({ ...transactionInput, [e.target.name]: e.target.value });
        } else if (targetState === "goal") {
            setGoalInput({ ...goalInput, [e.target.name]: e.target.value });
        }
    };

    const getValue = () => {
        if (targetState === "transaction") {
            return transactionInput;
        } else if (targetState === "goal") {
            return goalInput;
        }
        return ""
    }
    
    function populateOptions() {
        switch (dropdownType) {
            case "cashflow" :
                let cashflowOptions = ["Income", "Expense"];
                return cashflowOptions.map((str , index)=> <option key={index}>{str}</option>)
                break;
            case "category":
                let categoryOptions = ["None", "Home", "Utilities", "Food", "Gas", "Car Mntc", "Paycheck"]
                return categoryOptions.map((str , index)=> <option key={index}>{str}</option>)
                break;
            case "payType" :
                let payTypeOptions = ["Auto", "Manual"]
                return payTypeOptions.map((str , index)=> <option key={index}>{str}</option>)              
                break;
            case "recurring":
                let recurringOptions = ["Daily","Weekly","Monthly","Annually"]
                return recurringOptions.map((str , index)=> <option key={index}>{str}</option>)                
                break;
            case "tag":
                let tagOptions = ["None", "Essential", "Tanner", "Ondine", "Misc"];
                return tagOptions.map((str , index)=> <option key={index}>{str}</option>)                
                break;
            default: 
                <option></option>
        }
    }

    return <select name={dropdownType} value={getValue()} onChange={handleChange}>{populateOptions()}</select>
}