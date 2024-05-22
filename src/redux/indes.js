import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice1";
const store = configureStore({
    reducer:{
        user:userSlice
    }
})
export default store;