'use client'

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useMemo } from 'react';

export default function GoalCard ({goal, allTransactions}) {
    
    const actual = useMemo(() =>{

        const start = new Date(goal.startDate)
        const end = new Date(goal.endDate)
        

        const filteredTransactions = allTransactions.filter((t)=> {
            const transDate = new Date(t.date);
            
            let dateMatch = transDate >= start && transDate <= end;
            if (!dateMatch) return false;
            let cashflowMatch = t.cashflow === goal.cashflow;
            if (!cashflowMatch) return false;
            let categoryMatch = t.category === goal.category;
            if (goal.category !== "None" && !categoryMatch) return false;
            let tagMatch = goal.tag.findIndex(goalTag => t.tag.includes(goalTag) || goalTag === "None");
            if (tagMatch === -1) return false;
            return true;
        })
        return filteredTransactions.reduce((sum, trans) => sum + Number(trans.amount), 0)
    },[allTransactions])

    function getClassname(){
        if(goal.cashflow === "Income"){
            if ((Number(goal.amount) - actual)>0) return "fail";
            return "success";
        } else if (goal.cashflow === "Expense") {
            if((Number(goal.amount) - actual)>0) return "success";
            return "fail";
        }
    }

    return (
        <div className="goalCard">
            <p><span className='goalTitle'>{goal.title}</span><MoreHorizOutlinedIcon></MoreHorizOutlinedIcon></p>
            <p>Goal: ${goal.amount}</p>
            <p>Actual: <span className={getClassname()}>${actual}</span></p>
        </div>
    )
}