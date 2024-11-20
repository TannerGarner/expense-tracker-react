import RegTrans from "./RegTrans";
import TransDropdown from "./TransDropdown";
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';

export default function RegTransCard() {
  return (
    <div className="regTransCard">
      <h4>Track Transactions</h4>
      <div className="dropDownMenus">
        <TransDropdown></TransDropdown>
        <TransDropdown></TransDropdown>
        <TransDropdown></TransDropdown>
      </div>
      <div className="regTransTable">
        <div className="regTransHead">
          <p>Date<SwapVertOutlinedIcon></SwapVertOutlinedIcon></p>
          <p>Description<SwapVertOutlinedIcon></SwapVertOutlinedIcon></p>
          <p>Category<SwapVertOutlinedIcon></SwapVertOutlinedIcon></p>
          <p>$Amount<SwapVertOutlinedIcon></SwapVertOutlinedIcon></p>
        </div>
        <div className="regTransBody">
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
          <RegTrans></RegTrans>
        </div>
      </div>
    </div>
  );
}
