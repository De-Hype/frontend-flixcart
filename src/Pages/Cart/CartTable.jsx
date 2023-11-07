import { useDispatch } from 'react-redux'
import { removeFromCart, addToCart, decreaseCart } from '../../redux/Cartslice';
import { useNavigate } from 'react-router-dom';

const CartTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storageData = JSON.parse(localStorage.getItem("cartItems"));
  const handleRemoveFromCart =(cartItem)=>{
    dispatch(removeFromCart(cartItem))
    navigate('/cart')
  }
  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
    navigate('/cart')
  };
  
  const handleDecreaseFromCart =(cartItem)=>{
    dispatch(decreaseCart(cartItem))
    navigate('/cart')
  }
  
  return (
    <>
      <div className="cart-table-container">
        <div className="titles">
          <h3 className="product-titles">Product</h3>
          <h3 className="product-price">Price</h3>
          <h3 className="product-quantity">Quantity</h3>
          <h3 className="product-total">Total</h3>
        </div>
        <div className="cart-table-items">
          {storageData?.map((cartItem, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-product">
                <img src={cartItem.imageUrl} alt={cartItem.name} />
                <div className="cart-product-details">
                  <h3>{cartItem.name}</h3>
                  <button onClick={()=>handleRemoveFromCart(cartItem)}>Remove</button>
                </div>
              </div>
              <div className="cart-product-price">${cartItem.new_price}</div>
              <div className="cart-product-quantity">
                <button onClick={()=> handleDecreaseFromCart(cartItem)}>-</button>
                <div className="count">{cartItem.cartQuantity}</div>
                <button onClick={()=>handleAddToCart(cartItem)}>+</button>
              </div>

              <div className="cart-product-total-price">
                
                ${cartItem.new_price * cartItem.cartQuantity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartTable;
