'use client'

import RegTrans from "./RegTrans";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import RegTransInput from "./RegTransInput";
import { useContext } from "react";
import { DisplayContext } from "@/context/DisplayContextProvider";
import { TransactionsContext } from "@/context/TransactionContextProvider";

export default function RegTransCard() {

  const { setDisplay } = useContext(DisplayContext)
  const { transactions } = useContext(TransactionsContext)

  //Add Sort Functions

  //By Description (Alphabetical)
  function sortDescription(){
    transactions.sort((a,b)=> {
      const descriptA = a.description.toUpperCase();
      const descriptB = b.description.toUpperCase();
      if (descriptA < descriptB) return -1
      if (descriptA > descriptB) return 1;
      return 0;
    })
  }

  //By Amount (Largest to smallest, Smallest to Largest)
  function sortAmount() {
    transactions.sort((a,b)=>{
      let amountA = Number(a.amount)
      let amountB = Number(b.amount)
      if (a.cashflow === 'expense') amountA = amountA/-1;
      if (b.cashflow === 'expense') amountB = amountB/-1;
      amountA - amountB;
    })
  }

  
  //By Date
  
  function sortDate(){
    const start = new Date(goal.startDate)
    const end = new Date(goal.endDate)

    
  }

  //By Category (Alphabetical)


  function populateTransactions() {
    return transactions.map((reg, index)=> <RegTrans key={index} reg={reg}></RegTrans>)
  }

  return (
    <div className="regTransCard">
      <h4>Track Transactions</h4>
      <div className="dropDownMenus">
        <DropdownMenu dropdownType={"tag"} targetState={"none"}></DropdownMenu>
        <DropdownMenu dropdownType={"cashflow"} targetState={"none"}></DropdownMenu>
        <DropdownMenu dropdownType={"date"} targetState={"none"}></DropdownMenu>
      </div>
      <div className="regTransTable">
        <div className="regTransHead">
          <p>Date<SwapVertOutlinedIcon/></p>
          <p>Description<SwapVertOutlinedIcon/></p>
          <p>Category<SwapVertOutlinedIcon/></p>
          <p>$Amount<SwapVertOutlinedIcon/></p>
        </div>
        <div className="regTransBody">
          {populateTransactions()}
        </div>
        <RegTransInput onSubmitted={() => {setDisplay(null)}}></RegTransInput>
      </div>
    </div>
  );
}
