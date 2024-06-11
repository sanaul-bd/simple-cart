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
    },
    updateStock: (state, action) => {
        const { productId, quantity } = action.payload;
        const product = state.products.find(p => p.id === productId)
        if (product && product.quantity !== -1) {
            product.quantity -= quantity;
        }
    }
});


export default productSlice.reducer;
export const { get_products, updateStock } = productSlice.actions;