import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/auth/productSlice";
import orderReducer from "../features/auth/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    order: orderReducer,
  },
});
