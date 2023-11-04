import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./SearchResults.css";
import { Link } from "react-router-dom";
import image_One from "../../assets/image_One.jpg";


const SearchResults = () => {
  return (
    <div className="search-results">
      <Header />

      <div className="SearchResults">
        <h4 className="found-results">
          Search results for '<span>Wrist Watch</span>'
        </h4>

        <div className="bottom">
          <div className="box">
            <img src={image_One} alt="An image of a boy" />
            <div className="about-item">
              <h4 className="about-item-name">Mercedez G-730</h4>
              <div className="about-item-price-stock">
                <div className="price-section">
                  <h4 className="new-price">$1100</h4>
                </div>
              </div>
              <div className="last">
                <Link to="/">
                  <AiOutlineEye className="product-icon" />
                </Link>
                <h4 className="last-box-prop">
                  <AiOutlineShoppingCart className="last-box-prop-icon" />
                  Add to cart
                </h4>
              </div>
            </div>
          </div>

          <div className="box">
            <img src={image_One} alt="An image of a boy" />
            <div className="about-item">
              <h4 className="about-item-name">Mercedez G-730</h4>
              <div className="about-item-price-stock">
                <div className="price-section">
                  <h4 className="new-price">$1100</h4>
                </div>
              </div>
              <div className="last">
                <Link to="/">
                  <AiOutlineEye className="product-icon" />
                </Link>
                <h4 className="last-box-prop">
                  <AiOutlineShoppingCart className="last-box-prop-icon" />
                  Add to cart
                </h4>
              </div>
            </div>
          </div>

          <div className="box">
            <img src={image_One} alt="An image of a boy" />
            <div className="about-item">
              <h4 className="about-item-name">Mercedez G-730</h4>
              <div className="about-item-price-stock">
                <div className="price-section">
                  <h4 className="new-price">$1100</h4>
                </div>
              </div>
              <div className="last">
                <Link to="/">
                  <AiOutlineEye className="product-icon" />
                </Link>
                <h4 className="last-box-prop">
                  <AiOutlineShoppingCart className="last-box-prop-icon" />
                  Add to cart
                </h4>
              </div>
            </div>
          </div>

          <div className="box">
            <img src={image_One} alt="An image of a boy" />
            <div className="about-item">
              <h4 className="about-item-name">Mercedez G-730</h4>
              <div className="about-item-price-stock">
                <div className="price-section">
                  <h4 className="new-price">$1100</h4>
                </div>
              </div>
              <div className="last">
                <Link to="/">
                  <AiOutlineEye className="product-icon" />
                </Link>
                <h4 className="last-box-prop">
                  <AiOutlineShoppingCart className="last-box-prop-icon" />
                  Add to cart
                </h4>
              </div>
            </div>
          </div>

          <div className="box">
            <img src={image_One} alt="An image of a boy" />
            <div className="about-item">
              <h4 className="about-item-name">Mercedez G-730</h4>
              <div className="about-item-price-stock">
                <div className="price-section">
                  <h4 className="new-price">$1100</h4>
                </div>
              </div>
              <div className="last">
                <Link to="/">
                  <AiOutlineEye className="product-icon" />
                </Link>
                <h4 className="last-box-prop">
                  <AiOutlineShoppingCart className="last-box-prop-icon" />
                  Add to cart
                </h4>
              </div>
            </div>
          </div>

          <div className="box">
            <img src={image_One} alt="An image of a boy" />
            <div className="about-item">
              <h4 className="about-item-name">Mercedez G-730</h4>
              <div className="about-item-price-stock">
                <div className="price-section">
                  <h4 className="new-price">$1100</h4>
                </div>
              </div>
              <div className="last">
                <Link to="/">
                  <AiOutlineEye className="product-icon" />
                </Link>
                <h4 className="last-box-prop">
                  <AiOutlineShoppingCart className="last-box-prop-icon" />
                  Add to cart
                </h4>
              </div>
            </div>
          </div>

          <div className="box">
            <img src={image_One} alt="An image of a boy" />
            <div className="about-item">
              <h4 className="about-item-name">Mercedez G-730</h4>
              <div className="about-item-price-stock">
                <div className="price-section">
                  <h4 className="new-price">$1100</h4>
                </div>
              </div>
              <div className="last">
                <Link to="/">
                  <AiOutlineEye className="product-icon" />
                </Link>
                <h4 className="last-box-prop">
                  <AiOutlineShoppingCart className="last-box-prop-icon" />
                  Add to cart
                </h4>
              </div>
            </div>
          </div>


          <div className="box">
            <img src={image_One} alt="An image of a boy" />
            <div className="about-item">
              <h4 className="about-item-name">Mercedez G-730</h4>
              <div className="about-item-price-stock">
                <div className="price-section">
                  <h4 className="new-price">$1100</h4>
                </div>
              </div>
              <div className="last">
                <Link to="/">
                  <AiOutlineEye className="product-icon" />
                </Link>
                <h4 className="last-box-prop">
                  <AiOutlineShoppingCart className="last-box-prop-icon" />
                  Add to cart
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
