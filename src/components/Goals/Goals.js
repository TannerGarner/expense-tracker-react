import GoalCard from "./GoalCard"

export default function Goals () {
    let month = "November";
    // function populateGoals (){
    //     goals.map(()=> {
    //         <GoalCard></GoalCard>
    //     })
    // }
    
    
    return (
        <div className="goals">
            <h4>{month} Goals</h4>
            <div className="goalCardContainer">
                <GoalCard></GoalCard>
                <GoalCard></GoalCard>
            </div>
        </div>
    )
}