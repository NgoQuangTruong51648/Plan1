import { configureStore } from "@reduxjs/toolkit";
import homePopular from "./homePopular";
import homeSlice from './homeSlice'
import listCart from "./listCart";
import listProducts from "./listProduct";

const rootReducer = {
    slice : homeSlice,
    popular : homePopular,
    products : listProducts,
    Carts : listCart
}

const store = configureStore({
    reducer: rootReducer
})

export default store