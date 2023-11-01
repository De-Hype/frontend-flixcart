import { AiOutlineChrome, AiOutlineGithub, AiOutlineLinkedin, AiOutlineShoppingCart, AiOutlineTwitter } from "react-icons/ai";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-top">
        <div className="logo-wrapper">
          <Link to="/" className="logo">
            <AiOutlineShoppingCart className="header-icon" />
            <h4 className="logo-text">FlixCart</h4>
          </Link>
          <p className="text">
            Your number place for all car and vehicle shoppings
          </p>
        </div>
        <div className="footer-container">
          <div className="box-one">
            <h4 className="navigation-heading">Company</h4>
            <div className="footer-navigations">
              <Link to="/" className="footer-links">
                Home
              </Link>
              <Link to="/" className="footer-links">
                About Us
              </Link>
              <Link to="/" className="footer-links">
                Shop
              </Link>
              <Link to="/" className="footer-links">
                Careers
              </Link>
            </div>
          </div>

          <div className="box-one">
            <h4 className="navigation-heading">Product</h4>
            <div className="footer-navigations">
              <Link to="/" className="footer-links">
                Toyota
              </Link>
              <Link to="/" className="footer-links">
                Lambourghini
              </Link>
              <Link to="/" className="footer-links">
                Mercedez Benz
              </Link>
              <Link to="/" className="footer-links">
                Bugatti
              </Link>
            </div>
          </div>

          <div className="box-one">
            <h4 className="navigation-heading">Legal</h4>
            <div className="footer-navigations">
              <Link to="/" className="footer-links">
                Terms
              </Link>
              <Link to="/" className="footer-links">
                Privacy
              </Link>
              <Link to="/" className="footer-links">
                Cookies
              </Link>
              <Link to="/" className="footer-links">
                Contact
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="bottom">
          <h4 className="site-owner">A product of <span>David Hype</span></h4>
          <div className="socials">
            <Link to='https://github.com/De-Hype'><AiOutlineGithub className="social-icon"/></Link>
            <Link to='/'><AiOutlineLinkedin className="social-icon"/></Link>
            <Link><AiOutlineTwitter className="social-icon"/></Link>
            <Link to='https://david-hype.netlify.app'><AiOutlineChrome className="social-icon"/></Link>

          </div>
        </div>
    </div>
  );
};

export default Footer;
