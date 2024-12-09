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
  const [ sortDirection, setSortDirection ] = useState(true); //true = low-high, false = high-low
  const [ filter, setFilter ] = useState();

  //Add Sort Functions
  const sortOptions = {
    date: "date",
    des: "description",
    cat: "category",
    amount: "amount",
  }

  function handleClick(sort) {
    const sortedTransactions = [...transactions];

    if (sort === sortOptions.date) {
      sortedTransactions.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return sortDirection ? dateA - dateB : dateB - dateA; // Toggle sort direction
      });
    }

    if (sort === sortOptions.des) {
      sortedTransactions.sort((a, b) => {
        return sortDirection
          ? a.description.localeCompare(b.description, undefined, { sensitivity: "base" })
          : b.description.localeCompare(a.description, undefined, { sensitivity: "base" });
      });
    }

    if (sort === sortOptions.cat) {
      sortedTransactions.sort((a, b) => {
        return sortDirection
          ? a.category.localeCompare(b.category, undefined, { sensitivity: "base" })
          : b.category.localeCompare(a.category, undefined, { sensitivity: "base" });
      });
    }

    if (sort === sortOptions.amount) {
      sortedTransactions.sort((a, b) => {
        let amountA = Number(a.amount);
        let amountB = Number(b.amount);

        // Adjust for cashflow direction
        if (a.cashflow === "expense") amountA *= -1;
        if (b.cashflow === "expense") amountB *= -1;

        return sortDirection ? amountA - amountB : amountB - amountA; // Toggle sort direction
      });
    }

    setSortDirection((prev) => !prev); // Toggle sortDirection
    setTransactions(sortedTransactions); // Update transactions
  }

  function populateTransactions() {
    
    if (!filter) return transactions.map((reg, index)=> <RegTrans key={index} reg={reg}></RegTrans>)
    
    const filteredTransactions = transactions.filter((t)=>{
      let cashflowMatch = t.cashflow === filter?.cashflow || filter.cashflow === "None";
      if (!cashflowMatch) return false;
      if (filter.tag){
        let tagMatch = filter?.tag.findIndex(filterTag => t.tag.includes(filterTag) || filterTag === "None");
        if (tagMatch === -1) return false;
      }
      if (filter.date){
        
      }
      return true;
    })
    
    return filteredTransactions.map((reg, index)=> <RegTrans key={index} reg={reg}></RegTrans>)
  }

  return (
    <div className="regTransCard">
      <h4>Track Transactions</h4>
      <div className="dropDownMenus">
        <DropdownMenu dropdownType={"tag"} filter={filter} setFilter={setFilter}></DropdownMenu>
        <DropdownMenu dropdownType={"cashflow"} filter={filter} setFilter={setFilter}></DropdownMenu>
        <DropdownMenu dropdownType={"date"} filter={filter} setFilter={setFilter}></DropdownMenu>
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
