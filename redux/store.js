import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

configureStore({
    reducer: {
        Cart: cartReducer,
    }
});