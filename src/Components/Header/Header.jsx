import {
  AiOutlineCloseCircle,
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { seeSearchResult } from "../../redux/productSlice";
import { Backend_URL } from "../../server";
import Cookies from "js-cookie";
const Header = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [count, setCount] = useState(0);
  const [itemCount, setItemCount] = useState([]);
  const [itemValue, setItemValue] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuShow, setMenuShow] = useState(false);
  // const [passResult, setPassResult] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const FindValue = () => {
    const getValue = localStorage.getItem("cartTotalQuantity");
    const itemNum = JSON.parse(localStorage.getItem("cartItems"));

    setItemCount(itemNum?.length);
    if (itemCount != null || undefined) {
      setItemValue(itemCount);
    } else {
      setItemValue(0);
    }
    if (getValue !== null) {
      const itemQuantity = getValue;
      setCartQuantity(itemQuantity);
    }
  };

  const SearchApi = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.get(
        `${Backend_URL}/admin/product/search-product/${searchTerm}`
      );
      navigate("/search");
      dispatch(seeSearchResult(result));
    } catch (error) {
      console.log(error);
    }
  };

  const CheckCookie = async () => {
    const user_flixcart_Id = Cookies.get("user_flixcart_Id");

    try {
      if (user_flixcart_Id !== undefined || null) {
        // const result = await axios.post(`${Backend_URL}/verify-cookie`, {
        //   user_flixcart_Id,
        // });
        const result = await axios.post(
          `http://localhost:7070/api/verify-cookie`,
          {
            user_flixcart_Id,
          }
        );
        const res = result.data;
        if (res.status === "ok" && res.success === true) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      }
    } catch (err) {
      console.log(err);

      setIsAuthenticated(false);
    }
  };

  const handleMenuShow = () => {
    setMenuShow(!menuShow);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    FindValue();
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="Header">
      <Link className="logo" to='/' >
        <AiOutlineShoppingCart className="header-icon" />
        <h4 className="logo-text">FlixCart</h4>
      </Link>
      <form onSubmit={SearchApi} className="search-bar">
        <input
          type="text"
          name=""
          placeholder="Search for products"
          id="search-bar-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <AiOutlineSearch className="icon" onClick={SearchApi} />
      </form>
      <div className="user-account-header">
        <Link to="/cart" className="header-wrapper">
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

      <div className="mobile_screen">
        <div className="menu-wrapper">
          <AiOutlineMenu className="mobile-menu" onClick={handleMenuShow} />
          <div className="logo">
            <AiOutlineShoppingCart className="header-icon" />
            <h4 className="logo-text">FlixCart</h4>
          </div>
        </div>

        <div className="search-bar">
          <input
            type="text"
            name=""
            placeholder="Search for products"
            id="search-bar-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AiOutlineSearch className="icon" onClick={SearchApi} />
        </div>
        <div className="menu-wrapper">
          <Link to="/cart" className="header-wrapper">
            <AiOutlineShopping className="icon" />
            {cartQuantity <= 0 ? <></> : <span>{cartQuantity}</span>}
          </Link>
          <AiOutlineUser className="mobile-user" />
        </div>
      </div>
      {menuShow && (
        <div className="header-toggle">
          <div className="header-toggle-top">
            <div className="logo">
              <AiOutlineShoppingCart className="header-icon" />
              <h4 className="logo-text">FlixCart</h4>
            </div>
            <AiOutlineCloseCircle
              onClick={handleMenuShow}
              className="mobile-menu"
            />
          </div>
          <div className="header-toggle-body">
            <p>
              <Link className="toggle-links" to="/">
                Home
              </Link>
            </p>
            <p>
              <Link className="toggle-links" to="/about-us">
                About Us
              </Link>
            </p>
            <p>
              <Link className="toggle-links" to="/shop">
                Shop
              </Link>
            </p>
            <p>
              <Link className="toggle-links" to="https://centuri-blog.netlify.app">
                Blog
              </Link>
            </p>
            <p>
              <Link className="toggle-links" to="/">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
