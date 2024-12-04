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
