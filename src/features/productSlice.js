import { createSlice } from "@reduxjs/toolkit";
import product_Data from "../store/productData";

const initialState = {
    products: []
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        get_products: (state, action) => {
            state.products = product_Data.map(p => p);
        }
    }
});


export default productSlice.reducer;
export const { get_products } = productSlice.actions;