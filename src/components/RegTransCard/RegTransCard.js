import RegTrans from "./RegTrans";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import RegTransInput from "./RegTransInput";

export default function RegTransCard() {
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
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
        </div>
        <RegTransInput></RegTransInput>
      </div>
    </div>
  );
}
