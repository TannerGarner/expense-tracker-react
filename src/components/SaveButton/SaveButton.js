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
        console.log(goal);
        console.log(transaction);
        setDisplay(null);
    }

    return (
        <div className="saveButton button" onClick={handleClick}>
            <p>Save</p>
        </div>
    );
}