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
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Backend_URL } from "../../server";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cartslice";
const ProductDetails = () => {
  const [result, setResults] = useState(null);
  const [showResult, setShowResult] = useState(false)
  const {id}=useParams()
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseFromCart =(item)=>{
    dispatch(decreaseCart(item))
  }
 
  const RevealProduct = async () =>{
    try {
       const res = await axios.get(`${Backend_URL}/admin/product/get-product/${id}`)
      // const res = await axios.get(`http://localhost:7070/api/admin/product/get-product/${id}`);
      if (res.data.status == 'ok'){
        setResults([res.data.getProductInfo])
        setShowResult(true)
      }
      // console.log(res)
    } catch (error) {
      console.log(error)
      setShowResult(false)
    }
  }

  useEffect(() => {
    RevealProduct()
  }, [])

  const ShowProductDetails = ()=>{
    return(
      <>
      {
        result.map((item, index)=>(
          <div className="product-details-top" key={index}> 
        <img src={item.imageUrl} alt="" />
        <div className="product-details-info">
          <h4 className="product-details-info-name">{item.name}</h4>
          <div className="rating">
            <AiOutlineStar className="ratings-star" />
            <AiOutlineStar className="ratings-star" />
            <AiOutlineStar className="ratings-star" />
            <AiOutlineStar className="ratings-star" />
            <AiOutlineStar className="ratings-star" />
          </div>
            <h4 className="new-price">${item.new_price}</h4>
          <p className="text">
          {item.description}
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
              <AiOutlineShoppingCart className="last-box-prop-icon"  onClick={() => handleAddToCart(item)}/>
              Add to cart
            </button>
            <div className="product-details-info-number">
              <button className="cart-number-btn" onClick={() => handleAddToCart(item)}>+</button> 
              <span>{item.cartQuantity}</span>
              <button className="cart-number-btn" onClick={()=> handleDecreaseFromCart(item)}>-</button>
            </div>
          </div>
        </div>
      </div>
        ))
      }
      </>
    )
  }
  
  return (
    <>
      <Header />
      <div className="ProductDetails">
        {showResult? <ShowProductDetails/>: <h4>Not Found</h4>}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
