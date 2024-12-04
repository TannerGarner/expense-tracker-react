export default function RegTrans ( {reg} ) {

    return (
        <div className="regTrans">
            <p>{reg.date}</p>
            <p>{reg.description}</p>
            <p>{reg.category}</p>
            <p>{reg.amount}</p>
        </div>
    )
}