import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./SearchResults.css";
import { Link } from "react-router-dom";
import image_One from "../../assets/image_One.jpg";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cartslice";
const SearchResults = () => {
  const [passResult, setPassResult] = useState(null);
  const [count, setCount] = useState(0);
  const [resultAvailable, setResultAvailable] = useState(null);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const getProduct = useSelector((state) => state.getProducts.searchResult);

  const fetchSearchResult = () => {
    if (getProduct.data.status == "ok") {
      setResultAvailable(true);
      return setPassResult(getProduct.data.findProducts);
    } else {
      setResultAvailable(false);
      return setPassResult(getProduct.data.message);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    fetchSearchResult();
    return () => clearInterval(timer);
  }, [count]);

  const IfResultAvailable = () => {
    return (
      <>
        {passResult.map((item, index) => (
          <div key={index} className="box">
            <img src={item.imageUrl} alt="An image of a boy" />
            <span>{item.discount_percent}% Off</span>
            <div className="about-item">
              <h4 className="about-item-name">{item.name}</h4>
              <div className="about-item-price-stock">
                <div className="price-section">
                  <h4 className="old-price">${item.old_price}</h4>
                  <h4 className="new-price">${item.new_price}</h4>
                </div>
              </div>
              <div className="last">
                <Link to={`/item/${item._id}`}>
                  <AiOutlineEye className="product-icon" />
                </Link>
                <h4
                  className="last-box-prop"
                  onClick={() => handleAddToCart(item)}
                >
                  <AiOutlineShoppingCart className="last-box-prop-icon" />
                  Add to cart
                </h4>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="search-results">
      <Header />

      <div className="SearchResults">
        <h4 className="found-results">
          Search results for '<span>{getProduct.data.searchTerm}</span>'
        </h4>
        <div className="FeaturedProductBottom">
          {resultAvailable ? (
            <IfResultAvailable />
          ) : (
            <div className="no_product_founds">
              <h4>No Products Found</h4>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
