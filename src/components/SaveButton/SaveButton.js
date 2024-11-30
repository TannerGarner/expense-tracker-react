'use client';

import { useContext } from "react";
import { DisplayContext } from "@/context/DisplayContextProvider";
import { GoalContext } from "@/context/GoalContextProvider";
import { TransactionContext } from "@/context/TransactionContextProvider";

export default function SaveButton() {
    const { setDisplay } = useContext(DisplayContext);
    const { goal } = useContext(GoalContext);
    const { transaction } = useContext(TransactionContext);

    function handleClick(e) {
        e.preventDefault();
        console.log('Goal', goal);
        console.log('Transaction', transaction);
        setDisplay(null);
    }

    return (
        <input type="submit" className="saveButton button" onClick={handleClick}></input>
    );
}