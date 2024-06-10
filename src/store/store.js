import { configureStore } from "@reduxjs/toolkit";
import products from "../features/productSlice";

const store = configureStore({
    reducer: {
        product: products
    }
});

export default store;