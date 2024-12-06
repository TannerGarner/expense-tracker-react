export default function RegTrans ( {reg} ) {

    new Date(reg.date);

    //Add Filter Functions

    let isIncome = reg.cashflow === "Income" ? true : false

    function cashflowClass(){
        if (isIncome) return "income";
        return "expense";
    }

    //modify date string for better display
    let displayDate = reg.date.replace("2024-","").replace("-", "/")

    return (
        <div className={`${cashflowClass()} regTrans`}>
            <p>{displayDate}</p>
            <p>{reg.description}</p>
            <p>{reg.category}</p>
            <p>{isIncome ? null: "-"}${reg.amount}</p>
        </div>
    )
}