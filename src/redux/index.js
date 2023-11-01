import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartItems = createAsyncThunk("items/getItems", async () => {
  const results = await axios.get("");
  return results.data;
});

const initialState = {
  loading: false,
  fetchedItems: [],
  error:'',
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.fetchedItems = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.fetchedItems = []
        state.error = action.error.message;
      });
  },
});

export const { addToCart } = userSlice.actions;
export default userSlice.reducer;
