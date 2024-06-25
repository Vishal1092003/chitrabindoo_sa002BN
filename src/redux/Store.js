import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CreateSlice";

export const store = configureStore({
    reducer:{
        cart:CartSlice.reducer
    }
});