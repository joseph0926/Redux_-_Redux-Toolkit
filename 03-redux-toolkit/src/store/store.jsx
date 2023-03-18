import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slice/cart-slice";
import modalReducer from "./slice/modal-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
