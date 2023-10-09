import {
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import desk from '../../assets/desk.jpg'
import keyboard from '../../assets/keyboard.jpg';
import macbook from '../../assets/macbook.jpg';
import watch from '../../assets/watch.jpg';
import stopwatch from '../../assets/stopwatch.jpg';
import phone from '../../assets/phone.jpg'

const Product = () => {
  return (
    <div className="Product">
      <div className="top">
        <p>Showing 1 - 6 of 12 results </p>
        <option value="Show By Price"></option>
      </div>
      <div className="container">
        <div className="box">
          <img src={desk} id="image" alt='A dummy text' />
          <p className="discount">-15%</p>
          <div className="content">
            <h4 className="name">Lario Desk</h4>
            <div className="price-tag">
              <p className="new-price">$14.98</p>
              <p className="old-price">$20.98</p>
            </div>
            <div className="rating">
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
            </div>
            <div className="buy-option">
              <div className="cart-option">
                <AiOutlineShoppingCart className="icon" />
              </div>
              <div className="buy-number">
                <Link to="/item/:id" className="button">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <img src={keyboard} id="image" alt="" />
          <p className="discount">-10%</p>
          <div className="content">
            <h4 className="name">Caso Keyboard</h4>
            <div className="price-tag">
              <p className="new-price">$8.08</p>
              <p className="old-price">$12.98</p>
            </div>
            <div className="rating">
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
            </div>
            <div className="buy-option">
              <div className="cart-option">
                <AiOutlineShoppingCart className="icon" />
              </div>
              <div className="buy-number">
                <Link to="/item/:id" className="button">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <img src={macbook} id="image" alt="" />
          <p className="discount">-45%</p>
          <div className="content">
            <h4 className="name">Macbook 2021</h4>
            <div className="price-tag">
              <p className="new-price">$400.70</p>
              <p className="old-price">$700.98</p>
            </div>
            <div className="rating">
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
            </div>
            <div className="buy-option">
              <div className="cart-option">
                <AiOutlineShoppingCart className="icon" />
              </div>
              <div className="buy-number">
                <Link to="/item/:id" className="button">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <img src={phone} id="image" alt="" />
          <p className="discount">-20%</p>
          <div className="content">
            <h4 className="name">iPhone 15</h4>
            <div className="price-tag">
              <p className="new-price">$300.98</p>
              <p className="old-price">$500.98</p>
            </div>
            <div className="rating">
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
            </div>
            <div className="buy-option">
              <div className="cart-option">
                <AiOutlineShoppingCart className="icon" />
              </div>
              <div className="buy-number">
                <Link to="/item/:id" className="button">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <img src={watch} id="image" alt="" />
          <p className="discount">-24%</p>
          <div className="content">
            <h4 className="name">Dead Watch</h4>
            <div className="price-tag">
              <p className="new-price">$70.98</p>
              <p className="old-price">$90.98</p>
            </div>
            <div className="rating">
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
            </div>
            <div className="buy-option">
              <div className="cart-option">
                <AiOutlineShoppingCart className="icon" />
              </div>
              <div className="buy-number">
                <Link to="/item/:id" className="button">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <img src={stopwatch} id="image" alt="" />
          <p className="discount">-30%</p>
          <div className="content">
            <h4 className="name">Stopwatch</h4>
            <div className="price-tag">
              <p className="new-price">$50.98</p>
              <p className="old-price">$74.98</p>
            </div>
            <div className="rating">
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
            </div>
            <div className="buy-option">
              <div className="cart-option">
                <AiOutlineShoppingCart className="icon" />
              </div>
              <div className="buy-number">
                <Link to="/item/:id" className="button">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
