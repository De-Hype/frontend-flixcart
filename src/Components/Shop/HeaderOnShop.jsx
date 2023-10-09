import { AiOutlineNotification, AiOutlineThunderbolt } from "react-icons/ai";
import { CiBellOn, CiShoppingCart } from "react-icons/ci";

const HeaderOnShop = () => {
  return (
    <div className="Header">
      <div className="Container">
        <div className="logo">
          <AiOutlineThunderbolt />
          <h3>Refill</h3>
        </div>
        <div className="icon-div">
          <div className="sep-icons">
            <CiBellOn className="icons" />
            <span>0</span>
          </div>
          <div className="sep-icons">
            <CiShoppingCart className="icons" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOnShop;
