import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuantity: 0,
  cartTotalAmount: localStorage.getItem("cartTotalQuantity")
  ? JSON.parse(localStorage.getItem("cartTotalQuantity"))
  : null,
  
};

export const cartSlice = createSlice({
  name: "cartActions",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      console.log(itemIndex)
      if (itemIndex >= 0) {
        console.log('Succesfully increased an item to cart')
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartTotalAmount +=1
        toast.success(`Successfully added another ${action.payload.name} to cart`, {
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
        console.log('Succesfully added a new item to cart')
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartTotalAmount +=1
        state.cartItems.push(tempProduct);
        //Add React toastify for succesfully adding new product to cart
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      localStorage.setItem('cartTotalQuantity', JSON.stringify(state.cartTotalAmount))
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.cartItems = nextCartItems;
      
      state.cartTotalAmount = state.cartTotalAmount - action.payload.cartQuantity
      // state.cartTotalAmount -= action.payload.cartQuantity
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem('cartTotalQuantity', JSON.stringify(state.cartTotalAmount))
      toast.info(`${action.payload.name} removed from cart`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartTotalAmount -=1
        
        //Write A Toast Message For Item Decreased
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cartItems = nextCartItems;
        state.cartTotalAmount -=1
        //We Will Add A Toast That An Item Has Been Removed Successfully
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem('cartTotalQuantity', JSON.stringify(state.cartTotalAmount))
    },
    
  },
});

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
