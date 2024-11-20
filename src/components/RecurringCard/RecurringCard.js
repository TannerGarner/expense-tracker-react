import RecurTrans from "./RecurTrans";

export default function RecurringCard () {
    return (
        <div className="recurringCard">
            <h4>Recurring Transactions</h4>
            <i className="ellipsis-vertical"></i>
            <div className="transContainer">
                {/* {recurring.map(()=> { */}
                    <RecurTrans></RecurTrans>
                    <RecurTrans></RecurTrans>
                    <RecurTrans></RecurTrans>
                    <RecurTrans></RecurTrans>
                    <RecurTrans></RecurTrans>
                    <RecurTrans></RecurTrans>
                {/* })} */}
            </div>
        </div>
    )
}