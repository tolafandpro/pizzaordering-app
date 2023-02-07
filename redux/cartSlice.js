import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        products: [],
        cartqty: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.cartqty += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset:(state)=> {
            state = initialState;
        }
    },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;