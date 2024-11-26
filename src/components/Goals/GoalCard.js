import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import GoalInput from './GoalInput';

export default function GoalCard () {
    let goal = {
        title: "Income",
        amount: "$1,545",
        actual: "$785",
    }
    
    return (
        <div className="goalCard">
            <p>{goal.title} <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon></p>
            <p>Goal: {goal.amount}</p>
            <p>Actual: {goal.actual}</p>
        </div>
    )
}