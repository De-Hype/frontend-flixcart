import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./ProductDetails.css";
import image_Two from "../../assets/image_Two.jpg";
import {
  AiOutlineChrome,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  return (
    <>
      <Header />
      <div className="ProductDetails">
        <div className="product-details-top">
          <img src={image_Two} alt="" />
          <div className="product-details-info">
            <h4 className="product-details-info-name">Mercedez Benz - G70</h4>
            <div className="rating">
              <AiOutlineStar className="ratings-star" />
              <AiOutlineStar className="ratings-star" />
              <AiOutlineStar className="ratings-star" />
              <AiOutlineStar className="ratings-star" />
              <AiOutlineStar className="ratings-star" />
            </div>
              <h4 className="new-price">$1100</h4>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem excepturi dolores, reprehenderit omnis at cum, eos
              eaque dolor ea temporibus deserunt officia voluptatem, repellendus
              et quibusdam perferendis suscipit incidunt nihil.
            </p>
            <div className="product-details-info-socials">
              Share :
              <Link to="https://github.com/De-Hype">
                <AiOutlineGithub className="product-icons" />
              </Link>
              <Link to="https://linkedln">
                <AiOutlineLinkedin className="product-icons" />
              </Link>
              <Link to="https://david-hype.netlify.app">
                <AiOutlineChrome  className="product-icons"/>
              </Link>
            </div>
            <div className="product-details-info-cart-number">
              <button className="cart-number">
                <AiOutlineShoppingCart className="last-box-prop-icon" />
                Add to cart
              </button>
              <div className="product-details-info-number">
                <button className="cart-number-btn">+</button> <span>1</span>
                <button className="cart-number-btn">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
