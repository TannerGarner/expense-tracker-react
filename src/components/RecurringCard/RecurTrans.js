export default function RecurTrans () {
    let recurring = {
        name: "Rent",
        method: "Due",
        date: "11/1", 
        amount: "$950.00"
    }

    return (
        <div className="recurTrans">
            {/* <TransactionIcon></TransactionIcon> */}
            <div className="circle"></div>
            <p>{recurring.name}</p>
            <p>{recurring.method} {recurring.date}</p>
            <p>{recurring.amount}</p>
        </div>
    )
}