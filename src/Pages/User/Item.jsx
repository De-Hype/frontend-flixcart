import { Link } from "react-router-dom";
import styleCar from "../../assets/StyleCar.jpg";
import Reviews from "../../Components/Item/Reviews";
import HeaderOnShop from "../../Components/Shop/HeaderOnShop";
import { AiFillHome } from "react-icons/ai";
const Item = () => {
  return (
    <div className="Item">
      <div className="Go-home">
        <Link className="link" to="/">Go Home</Link>
        <AiFillHome />
      </div>
      <div className="Main-Item">
        <div className="image-wrapper">
          <img src={styleCar} className="image" alt="" />
          <p className="discount">-40%</p>
        </div>
        <div className="Item-Body">
          <div className="container">
            <div className="content">
              <div className="price-tag">
                <p className="new-price">$38.98</p>
                <p className="old-price">$28.98</p>
              </div>
            </div>
            <h3 className="product-name">Gaming Laptop</h3>
            <p className="product-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              blanditiis iusto iure porro? Nesciunt cum necessitatibus ad eius
              maiores,
            </p>
            <div className="product-buttons">
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <div className="checkout">
              <Link to="/" className="proceed-checkout">
                To Checkout
              </Link>
              <Link to="/" className="proceed-checkout">
                Add To Cart
              </Link>
            </div>
            {/* http://127.0.0.1:5173/item/id */}
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Item;
