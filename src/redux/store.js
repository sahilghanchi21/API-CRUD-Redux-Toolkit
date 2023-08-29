import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./userSlice";

export const store = configureStore({
    reducer: {
        app: userDetails
    }
})