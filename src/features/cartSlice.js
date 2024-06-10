import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isError: false, 
    isSuccess: false,
    massege: null,
    totalPrice: 0,
    totalQuantity: 0, 

};

// AsyncThunk 
export const addToCart = createAsyncThunk(
    "cart/AddToCart", 
    async(lineItems , thunkAPI) => {
        try {
            
        } catch (error) {
            
        }
    }
)

export const cartSlice = configureStore({
    name: "cart", 
    initialState,
    reducer: {
        restCart: ()=> {
            initialState
        }
    }
});


export default cartSlice;