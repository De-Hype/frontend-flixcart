import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isUser = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className="Header">
      <div className="Container">
        <div className="logo">
          <AiOutlineThunderbolt />
          <h3>Refill</h3>
        </div>
        {isUser ? (
          <div className="LoggedIn ">
            <Link className="header-link  gap white-text" to="/about">
              About Us
            </Link>
            <Link className="header-link gap white-text" to="/partner">
              Partner With Us
            </Link>
            <Link className="header-link gap white-text" to="/shop">
              Shop
            </Link>
            <Link className="header-link gap white-text" to="/blog">
              Blog
            </Link>
            <Link className="header-link gap white-text" to="/#Contact">
              Contact
            </Link>
          </div>
        ) : (
          <div className="NotUser LoggedIn">
            <Link className="header-link gap white-text" to="/register">
              Register
            </Link>
            <Link className="header-link gap white-text" to="/login">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
