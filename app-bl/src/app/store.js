import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/userSlice";
import userReducer from '../Features/userSlice'

export default configureStore({
    reducer:{
        user:userReducer,
    },
}); 