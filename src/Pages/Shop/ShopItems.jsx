import { Link } from "react-router-dom";
import image_One from "../../assets/image_One.jpg";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../redux/productSlice";
import { addToCart } from "../../redux/Cartslice";
const ShopItems = () => {
  const dispatch = useDispatch();
  const getProduct = useSelector((state) => state.getProducts);
  const fetchedData = getProduct.fetchedCartItems;

  
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="ShopItems">
      {fetchedData?.map((item, index) => (
        <div key={index} className="box">
          <img src={item.imageUrl} alt="An image of a boy" />
          <div className="about-item">
            <h4 className="about-item-name">{item.name}</h4>
            <div className="about-item-price-stock">
              <div className="price-section">
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
    </div>
  );
};

export default ShopItems;
