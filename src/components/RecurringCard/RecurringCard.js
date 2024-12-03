import RecurringInput from "./RecurringInput";
import RecurTrans from "./RecurTrans";

export default function RecurringCard () {
    let recurring; //We need to identify which transactions are recurring. 
    
    function populateRecurring(){
        return recurring.map((recur, index)=> <RecurTrans key={index} recur={recur}></RecurTrans>)
    }
    
    return (
        <div className="recurringCard">
            <h4>Recurring Transactions</h4>
            <i className="ellipsis-vertical"></i>
            <div className="transContainer">
                {populateRecurring()}
                <RecurTrans></RecurTrans>
                <RecurTrans></RecurTrans>
                <RecurTrans></RecurTrans>
                <RecurTrans></RecurTrans>
                <RecurTrans></RecurTrans>
                <RecurTrans></RecurTrans>
            </div>
            <RecurringInput></RecurringInput>
        </div>
    )
}