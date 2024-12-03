import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function GoalCard ({goal}) {
    
    return (
        <div className="goalCard">
            <p>{goal.title} <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon></p>
            <p>Goal: {goal.amount}</p>
            <p>Actual: {goal.actual || "0"}</p>
        </div>
    )
}