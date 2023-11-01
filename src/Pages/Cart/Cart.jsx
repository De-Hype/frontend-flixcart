import { AiOutlineDoubleLeft } from "react-icons/ai";
import Header from "../../Components/Header/Header";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Backend_URL } from "../../server";

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  const CheckCookie = async () => {
    const user_flixcart_Id = Cookies.get("user_flixcart_Id");
    
    try {
      if (user_flixcart_Id !== undefined || null) {
        const result = await axios.post(`${Backend_URL}/verify-cookie`, {
          user_flixcart_Id,
        });
        
        const res = result.data;
        if (res.status === "ok" && res.success === true) {
          setIsAuthenticated(true);
         
        } else {
          
          setIsAuthenticated(false);
        }
      }
    } catch (err) {
      console.log(err);
      
      setIsAuthenticated(false);
    }
  };

  const checkLogin = async () => {
    if (isAuthenticated) {
      toast.success(`Item Purchased Succesfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Please Log In to complete this transaction", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/sign-in");
    }
  };
  const CheckStore = async () => {
    const itemNum = JSON.parse(localStorage.getItem("cartItems"));

    if (itemNum !== null || undefined) {
      setItemsInCart(true);
    }
  };
  useEffect(() => {
    CheckStore();
    CheckCookie();
  }, []);

  return (
    <div className="Cart">
      <Header />
      <div className="Cart_Page">
        {itemsInCart ? (
          <div className="Full_Cart">
            <h3 className="Shopping-heading">FlixCart Shopping Cart</h3>
            <div className="table"></div>
            <div className="below-table">
              <div className="left">
                <button className="clear-cart">Clear Cart</button>
              </div>
              <div className="right">
                <div className="subtotal">
                  <h3 className="subtotal-heading">Subtotal:</h3>
                  <h4 className="amount">
                    $<span>3000</span>
                  </h4>
                </div>
                <p className="paragraph">
                  Taxes and shipping fees are calculated at checkout
                </p>
                <div className="call-to-action">
                  <button onClick={checkLogin} className="proceed">
                    Check Out
                  </button>
                  <Link className="wrapper">
                    <AiOutlineDoubleLeft className="icon" />
                    <p className="cart-start-shopping">Continue Shopping</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="Empty_Cart">
            <h3 className="Shopping-heading">FlixCart Shopping Cart</h3>
            <p className="cart-paragraph"> Your Cart Is Currently Empty</p>
            <Link to="/shop" className="wrapper">
              <AiOutlineDoubleLeft className="icon" />
              <p className="cart-start-shopping">Start Shopping</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
