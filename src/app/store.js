import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/login/authSlice";
import cartReducer from "../modules/userCart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
