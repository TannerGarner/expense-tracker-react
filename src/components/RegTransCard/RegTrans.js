export default function RegTrans () {
    let trans = {
        date: "11/2",
        description: "Rent",
        category: "Home",
        amount: "$950.00"
    }


    return (
        <div className="regTrans">
            <p>{trans.date}</p>
            <p>{trans.description}</p>
            <p>{trans.category}</p>
            <p>{trans.amount}</p>
        </div>
    )
}