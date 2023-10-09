import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  const [SubEmail, setSubEmail] = useState("");
  const year = new Date().getFullYear();

  const handleSub = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Footer">
      <div className="Container">
        <div className="Quick-links">
          <ul className="ul-tags">
            <h3 className="footer-title">Quick Links</h3>
            <li>
              <Link className="link" to={"/"}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="link" to={"/"}>
                Client Policy
              </Link>
            </li>
            <li>
              <Link className="link" to={"/"}>
                Blog
              </Link>
            </li>
            <li>
              <Link className="link" to={"/"}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="Services-section">
          <ul className="ul-tags">
            <h3 className="footer-title">Account</h3>
            <li>
              <Link to={"/account"} className="link">
                My Account
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="link">
                Login/Register
              </Link>
            </li>
            <li>
              <Link to={"/cart"} className="link">
                Cart
              </Link>
            </li>
            <li>
              <Link to={"/notification"} className="link">
                Notifications
              </Link>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSub} className="Subscribe">
          <input
            type="text"
            onChange={(e) => setSubEmail(e.target.value)}
            name=""
            placeholder="Enter Email Here"
            id="Subcribe-input"
          />
          <input type="submit" value="Subscribe" id="Subscribe-btn" />
        </form>
      </div>
      <div className="socials">
        <AiOutlineTwitter className="icons"/>
        <AiOutlineFacebook className="icons"/>
        <AiOutlineGithub className="icons"/>
        <p className="year">{year}</p>
      </div>
    </div>
  );
};

export default Footer;
