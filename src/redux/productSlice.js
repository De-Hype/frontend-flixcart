import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Backend_URL } from "../server";

export const getCartItems = createAsyncThunk("items/getitems", async () => {
  const results = await axios.get(`${Backend_URL}/admin/product/get-product`);
  return results.data;
});

export const getHomeItems = createAsyncThunk(
  "homeitems/getHomeItems",
  async () => {
    const results = await axios.get(
      `${Backend_URL}/admin/product/home-product`
    );
    return results;
  }
);

const initialState = {
  loading: false,
  fetchedCartItems: [],
  fetchedHomeItems: [],
  error: "",
};

export const productSlice = createSlice({
  name: "getProducts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.fetchedCartItems = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.loading = false;
      state.fetchedCartItems = [];
      state.error = action.error.message;
    });

    builder.addCase(getHomeItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHomeItems.fulfilled, (state, action) => {
      state.loading = false;
      state.fetchedHomeItems = action.payload;
    });
    builder.addCase(getHomeItems.rejected, (state, action) => {
      state.loading = false;
      state.fetchedHomeItems = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
