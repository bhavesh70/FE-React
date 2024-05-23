import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reduxSlices/cartSlice";

const appStore = configureStore({
    reducer: {
       cart: cartSlice
    }
});


export default appStore;