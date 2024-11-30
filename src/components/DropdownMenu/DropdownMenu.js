'use client'

import { GoalContext } from "@/context/GoalContextProvider"
import { TransactionContext } from "@/context/TransactionContextProvider"
import { useContext } from "react"

export default function DropdownMenu ({ dropdownType, targetState }) {
    
    const {transaction, setTransaction} = useContext(TransactionContext)
    const {goal, setGoal} = useContext(GoalContext)

    const handleChange = (e) => {
        if (targetState === "transaction") {
            setTransaction({ ...transaction, [e.target.name]: e.target.value });
        } else if (targetState === "goal") {
            setGoal({ ...goal, [e.target.name]: e.target.value });
        }
    };

    function populateCashflow(){
        let cashflowOptions = ["Income", "Expense"];
        return(
            cashflowOptions.map((str , index)=> {
                return <option key={index}>{str}</option>
            })
        )
    }

    function populateCategories(){
        let categoryOptions = ["Home", "Utilites", "Food", "Gas", "Car Maintenance"]
        return (
            categoryOptions.map((str , index)=>{
                return<option key={index}>{str}</option>
            })
        )
    }

    function populatePayTypes() {
        let payTypeOptions = ["Auto", "Manual"]
        return (
            payTypeOptions.map((str , index)=>{
                return<option key={index}>{str}</option>
            })
        )
    }

    function populateRecurring() {
        let recurringOptions = ["Daily","Weekly","Monthly","Annually"]
        return (
            recurringOptions.map((str , index)=>{ 
                return<option key={index}>{str}</option>
            })
        )
    }

    function populateTags(){
        let tagOptions = ["None", "Essential", "Tanner", "Ondine", "Misc"];
        return(
            tagOptions.map((str , index)=> {
                return <option key={index}>{str}</option>
            })
        )
    }
    
    let renderedDropdown;

    switch (dropdownType) {
        case "cashflow" :
            renderedDropdown = <select name="cashflow" onChange={handleChange}>{populateCashflow()}</select>
            break;
        case "category":
            renderedDropdown = <select name="category" onChange={handleChange}>{populateCategories()}</select>
            break;
        case "payType" :
            renderedDropdown = <select name="payType" onChange={handleChange}>{populatePayTypes()}</select>
            break;
        case "recurring":
            renderedDropdown = <select name="recurring" onChange={handleChange}>{populateRecurring()}</select>
            break;
        case "tag":
            renderedDropdown = <select name="tag" onChange={handleChange}>{populateTags()}</select>
            break;
        default: 
            renderedDropdown = <select></select>;
    }

    return renderedDropdown
}