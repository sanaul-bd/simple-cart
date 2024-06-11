import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { updateStock } from "./productSlice";

const initialState = {
    items: [],
    isError: false,
    isSuccess: false,
    massege: null,
    totalPrice: 0,
    totalQuantity: 0,

};

class OutOfStockError extends Error{
    constructor(message){
        super(message)
        this.name = "OutOfStockError"
    }
}

// AsyncThunk 
export const addToCart = createAsyncThunk("cart/AddToCart", async (lineItem, thunkAPI) => {
    try {
        const existingStockProduct = await thunkAPI.getState().product.products.filter(prod => prod.id === lineItem.productId);
        if(existingStockProduct && existingStockProduct[0].quantity > 0){
            await thunkAPI.dispatch(updateStock(lineItem))
            return lineItem;
        }else{
            throw new OutOfStockError("Item out of stock")
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massege)
    }
}
)

export const cartSlice = configureStore({
    name: "cart",
    initialState,
    reducer: {
        restCart: () => {
            initialState
        }
    }
});


export default cartSlice;