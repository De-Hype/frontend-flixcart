import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    cartActions: cartReducer,
    getProducts: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
