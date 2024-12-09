'use client'

import RegTrans from "./RegTrans";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import RegTransInput from "./RegTransInput";
import { useContext, useState } from "react";
import { DisplayContext } from "@/context/DisplayContextProvider";
import { TransactionsContext } from "@/context/TransactionContextProvider";

export default function RegTransCard() {

  const { setDisplay } = useContext(DisplayContext)
  const { transactions, setTransactions } = useContext(TransactionsContext)
  const { sortType, setSortType } = useState("");

  //Add Sort Functions
  const sortOptions = {
    date: "date",
    des: "description",
    cat: "category",
    amount: "amount",
  }

  function handleClick(sort) {
    console.log("Sort Click");
  
    const sortedTransactions = [...transactions]; 
  
    if (sort === "date"){
      if (sortType !== "date") setSortType(sortOptions.date);
      sortedTransactions.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateA - dateB; 
      });
      
    }
  
    if (sort === "description") {
      setSortType(sortOptions.des);
      sortedTransactions.sort((a, b) => 
        a.description.localeCompare(b.description, undefined, { sensitivity: 'base' })
      );
    }
  
    if (sort === "category") {
      setSortType(sortOptions.cat);
      sortedTransactions.sort((a, b) => 
        a.category.localeCompare(b.category, undefined, { sensitivity: 'base' })
      );
    }
  
    if (sort === "amount") {
      setSortType(sortOptions.amount);
      sortedTransactions.sort((a, b) => {
        let amountA = Number(a.amount);
        let amountB = Number(b.amount);
  
        // Adjust for cashflow direction
        if (a.cashflow === "expense") amountA *= -1;
        if (b.cashflow === "expense") amountB *= -1;
  
        return amountA - amountB; 
      });
    }
  
    setTransactions(sortedTransactions); 
  }

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
          <p onClick={()=> handleClick(sortOptions.date)}>Date<SwapVertOutlinedIcon/></p>
          <p onClick={()=> handleClick(sortOptions.des)}>Description<SwapVertOutlinedIcon/></p>
          <p onClick={()=> handleClick(sortOptions.cat)}>Category<SwapVertOutlinedIcon/></p>
          <p onClick={()=> handleClick(sortOptions.amount)}>$Amount<SwapVertOutlinedIcon/></p>
        </div>
        <div className="regTransBody">
          {populateTransactions()}
        </div>
        <RegTransInput onSubmitted={() => {setDisplay(null)}}></RegTransInput>
      </div>
    </div>
  );
}
