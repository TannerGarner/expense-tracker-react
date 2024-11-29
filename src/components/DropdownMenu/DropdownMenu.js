'use client'

import { TransactionContext } from "@/context/TransactionContextProvider"
import { useContext } from "react"

export default function DropdownMenu () {
    
    const {transaction, setTransaction} = useContext(TransactionContext)

    const handleChange = (e) => {
        setTransaction({...transaction, [e.target.name]: e.target.value})
    }

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

    function populateDate() {
        let dateOptions = ["Today","Weekly","Monthly","Annually"]
        return (
            dateOptions.map((str , index)=>{ 
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

    const dropdownType = "cashflow";

    switch (dropdownType) {
        case "cashflow" :
            renderedDropdown = <select name="cashflow" onChange={handleChange}>{populateCashflow()}</select>
            break;
        case "category":
            renderedDropdown = <select>{populateCategories()}</select>
            break;
        case "tag":
            renderedDropdown = <select name="tag" onChange={handleChange}>{populateTags()}</select>
            break;
        default: 
            renderedDropdown = <select></select>;
    }

    return (
        <select onChange={handleChange}>
            {populateDate()}
        </select>
    )
}