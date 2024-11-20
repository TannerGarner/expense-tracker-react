export default function Balance () {
    let balance = "$240";
    function calcBalance() { 
        // balance += trans.amount;
        // return balance;
    }
    calcBalance(); 
    
    return(
        <div className="balance">
            <h4>Your Balance</h4>
            <h2>{balance}</h2>
        </div>
    )
}