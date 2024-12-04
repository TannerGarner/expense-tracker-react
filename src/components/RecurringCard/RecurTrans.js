export default function RecurTrans ( {recur} ) {
    

    return (
        <div className="recurTrans">
            {/* <TransactionIcon></TransactionIcon> */}
            <div className="circle"></div>
            <p>{recur.description}</p>
            <p>{recur.payType} {recur.date}</p>
            <p>{recur.amount}</p>
        </div>
    )
}