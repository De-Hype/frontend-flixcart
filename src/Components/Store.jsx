import { AiOutlineShopping, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import styleCar from "../assets/StyleCar.jpg"

const Store = () => {
  return (
    <div className="Store">
      <div className="box-1">
        <div className="top">
          <div className="intro">
            <AiOutlineShopping className="icon" />
            <p>Our Products</p>
          </div>
          <h3>EXPLORE OUR PRODUCTS</h3>
        </div>
        <div className="cart-containers">
          <div className="box">
            <div className="image">
              {/* <div className="main-image"></div> */}
            </div>
            <p className="discount">-24%</p>
            <div className="content">
              <h4 className="name">Gaming Pad</h4>
              <div className="price-tag">
                <p className="new-price">$38.98</p>
                <p className="old-price">$28.98</p>
              </div>
              <div className="rating">
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
              </div>
            </div>
          </div>

          

          <div className="box">
            <img src={styleCar} alt="" className="image" />
           
            <p className="discount">-24%</p>
            <div className="content">
              <h4 className="name">Gaming Pad</h4>
              <div className="price-tag">
                <p className="new-price">$38.98</p>
                <p className="old-price">$28.98</p>
              </div>
              <div className="rating">
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              {/* <div className="main-image"></div> */}
            </div>
            <p className="discount">-24%</p>
            <div className="content">
              <h4 className="name">Gaming Pad</h4>
              <div className="price-tag">
                <p className="new-price">$38.98</p>
                <p className="old-price">$28.98</p>
              </div>
              <div className="rating">
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              {/* <div className="main-image"></div> */}
            </div>
            <p className="discount">-24%</p>
            <div className="content">
              <h4 className="name">Gaming Pad</h4>
              <div className="price-tag">
                <p className="new-price">$38.98</p>
                <p className="old-price">$28.98</p>
              </div>
              <div className="rating">
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              {/* <div className="main-image"></div> */}
            </div>
            <p className="discount">-24%</p>
            <div className="content">
              <h4 className="name">Gaming Pad</h4>
              <div className="price-tag">
                <p className="new-price">$38.98</p>
                <p className="old-price">$28.98</p>
              </div>
              <div className="rating">
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              {/* <div className="main-image"></div> */}
            </div>
            <p className="discount">-24%</p>
            <div className="content">
              <h4 className="name">Gaming Pad</h4>
              <div className="price-tag">
                <p className="new-price">$38.98</p>
                <p className="old-price">$28.98</p>
              </div>
              <div className="rating">
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
                <AiOutlineStar className="icons" />
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <div className="box-2">
        <Link to='/shop' className="store-btn">See More</Link>
        {/* <button type="submit" className="store-btn">
          SEE MORE
        </button> */}
      </div>
    </div>
  );
};

export default Store;
