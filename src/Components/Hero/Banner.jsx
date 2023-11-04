import { Link } from "react-router-dom";
import image_Two from '../../assets/image_Two.jpg'
import { AiOutlineMoneyCollect, AiOutlineRollback, AiOutlineWallet } from "react-icons/ai";
const Banner = () => {
  return (
    <div className="Banner">
      <div className="top">
        <Link className="banner-links" to="/">Home</Link>
        <Link className="banner-links" to="/shop">Shop</Link>
        <Link className="banner-links" to="/about-us">About Us</Link>
        <Link className="banner-links" to="/blog">Blog</Link>
        <Link className="banner-links" to="/">Contact Us</Link>
      </div>
      <div className="img-wrapper">
        <img src={image_Two} alt="" />
      </div>
      <div className="banner-container">
        <div className="box">
          <AiOutlineWallet className="box-icons"/>
          <div className="box-wrapper">
            <h4 className="banner-container-heading">Shopping</h4>
            <p className="banner-container-text">Availability of various cars</p>
          </div>
        </div>
        <div className="box">
          <AiOutlineMoneyCollect className="box-icons"/>
          <div className="box-wrapper">
            <h4 className="banner-container-heading">Payment</h4>
            <p className="banner-container-text">Multi payment methods</p>
          </div>
        </div>
        <div className="box">
          <AiOutlineRollback className="box-icons"/>
          <div className="box-wrapper">
            <h4 className="banner-container-heading">Protection</h4>
            <p className="banner-container-text">Availability of 24hrs warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
