import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import userPostSlice from "./UserPostSlice";

const store = configureStore({
    reducer:{
        chatuserData:UserSlice,
        postUserData:userPostSlice
    }
})
export default store;