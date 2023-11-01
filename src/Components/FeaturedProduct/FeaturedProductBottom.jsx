import {
  AiOutlineEye,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import image_One from "../../assets/image_One.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getHomeItems} from '../../redux/productSlice';
import { addToCart } from '../../redux/Cartslice';
const FeaturedProductBottom = () => {
  const dispatch = useDispatch()
  const getProduct = useSelector((state)=> state.getProducts);
  const fetchedData = getProduct.fetchedHomeItems.data;
  console.log(getProduct)
  useEffect(() => {
    dispatch(getHomeItems())
  }, [])
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  
  return (
    <div className="FeaturedProductBottom">
     
      {
        fetchedData?.map((item, index)=>(
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
            <Link to='/item/1'>
              <AiOutlineEye className="product-icon" />
            </Link>
            <h4 className="last-box-prop" onClick={() => handleAddToCart(item)}>
              <AiOutlineShoppingCart className="last-box-prop-icon" />
              Add to cart
            </h4>
          </div>
        </div>
      </div>
        ))
      }
      
    </div>
  );
};

export default FeaturedProductBottom;
