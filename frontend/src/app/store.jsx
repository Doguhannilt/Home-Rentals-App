import { configureStore } from "@reduxjs/toolkit";
import booleanReducer from '../redux/features/booleanStatement'
const store = configureStore({
    reducer: {
        boolean : booleanReducer
    },
});

export default store;