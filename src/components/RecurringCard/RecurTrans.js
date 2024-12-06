export default function RecurTrans ( {recur} ) {

    //modify date string for better display
    let displayDate = recur.date.replace("2024-","").replace("-", "/")

    return (
        <div className="recurTrans">
            {/* <TransactionIcon></TransactionIcon> */}
            <div className="circle"></div>
            <p>{recur.description}</p>
            <p>{recur.payType} {displayDate}</p>
            <p>${recur.amount}</p>
        </div>
    )
}