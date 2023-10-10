import "./Header.css";
import logo from "./assets/logo.svg";
import search_icon from "../../assets/search_icon.svg";
import cart from "../../assets/cart.svg";
import profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";
import { AiOutlineBell } from "react-icons/ai";
const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <div className="header-navigation">
        <Link className="header-links" to="/">Home </Link>
        <Link className="header-links" to="/shop">Products</Link>
        <Link className="header-links" to="/blog">Blog</Link>
        <Link className="header-links" to="/about">About</Link>
        <Link className="header-links" to="/">Contact Us</Link>
      </div>
      <div className="header-icons">
        <AiOutlineBell className="icons"/>
        <div className="header-icons-wrapper">
          <span>1</span>
          <img src={cart} alt="" />
        </div>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
