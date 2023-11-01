import {
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./Header.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
const Header = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [count, setCount] = useState(0);
  const [itemCount, setItemCount] = useState([]);
  const [itemValue, setItemValue] = useState(1);


  const FindValue = () => {
    const getValue = localStorage.getItem("cartTotalQuantity");
    const itemNum = JSON.parse( localStorage.getItem("cartItems"));

    setItemCount(itemNum?.length)
      if (itemCount != null || undefined) {
        setItemValue(itemCount)
      } else{
        setItemValue(0)
      }
    if (getValue !== null) {
      const itemQuantity = getValue;
      setCartQuantity(itemQuantity);
    }

  };
  
  
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      
    }, 1000);
    FindValue();
    return ()=> clearInterval(timer)
  }, [count]);

  //   const itemInCart = JSON.parse(localStorage.getItem("cartItems"))[0]
  //     .cartQuantity;

  return (
    <div className="Header">
      <div className="logo">
        <AiOutlineShoppingCart className="header-icon" />
        <h4 className="logo-text">FlixCart</h4>
      </div>
      <div className="search-bar">
        <input
          type="text"
          name=""
          placeholder="Search for products"
          id="search-bar-input"
        />
        <AiOutlineSearch className="icon" />
      </div>
      <div className="user-account-header">
        <div className="header-auth">
          <p className="header-auth-hello">
            My Account{" "}
            <span>
              <AiOutlineDown className="icon" />
            </span>
          </p>
          <p className="header-auth-hello-text">
            Hello{" "}
            <span>
              <Link className="link" to="/sign-in">
                sign in
              </Link>
            </span>
          </p>
        </div>
        {/* <div className="header-wrapper">
          <AiOutlineHeart className="icon" />
          <span>10</span>
        </div> */}
        <Link to='/cart' className="header-wrapper">
          <AiOutlineShopping className="icon" />
          {cartQuantity <= 0 ? <></> : <span>{cartQuantity}</span>}
        </Link>
        <div className="header-auth">
          <p className="header-auth-hello">
            <span>{itemValue}</span> Items
          </p>
          <p className="header-auth-sign-in">
            $<span>1444.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
