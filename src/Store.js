import { configureStore } from "@reduxjs/toolkit";
import AllDetailsReducer from "./AllDetails";

export default configureStore({
    reducer: {
        allDetail: AllDetailsReducer
    }
})
