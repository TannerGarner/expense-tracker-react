'use client'

import { DisplayContext } from "@/context/DisplayContextProvider";
import { GoalInputContext } from "@/context/GoalContextProvider";
import { TransactionInputContext } from "@/context/TransactionContextProvider";
import { useContext, useEffect } from "react";

export default function DropdownMenu({ dropdownType, targetState, filter, setFilter }) {
    const { transactionInput, setTransactionInput } = useContext(TransactionInputContext);
    const { goalInput, setGoalInput } = useContext(GoalInputContext);
    const { display } = useContext(DisplayContext);

    const dropdownOptions = {
        cashflow: targetState ? ["Income", "Expense"] : ["None", "Income", "Expense"],
        category: ["None", "Home", "Utilities", "Food", "Gas", "Car Mntc", "Paycheck"],
        payType: ["Auto", "Manual"],
        recurring: ["Daily", "Bi-Weekly","Weekly", "Monthly", "Annually"],
        tag: ["None", "Essential", "Tanner", "Ondine", "Misc"],
        date: ["Daily", "Weekly", "Monthly", "Annual"],
    };

    const handleChange = (e) => {
        const value = dropdownType === "tag" ? [e.target.value] : e.target.value;
        const updatedState = { [dropdownType]: value };

        if (targetState === "transaction") {
            setTransactionInput((prev) => ({ ...prev, ...updatedState }));
        } else if (targetState === "goal") {
            setGoalInput((prev) => ({ ...prev, ...updatedState }));
        } else {
            setFilter((prev) => ({ ...prev, ...updatedState }))
        }
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <select name={dropdownType} defaultValue='default' onChange={handleChange}>
            <option className="customPlaceholder" value={"default"} disabled hidden>{capitalizeFirstLetter(dropdownType)}</option>
            {dropdownOptions[dropdownType]?.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}