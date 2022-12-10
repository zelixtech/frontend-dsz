import { configureStore } from "@reduxjs/toolkit";

import userReducer from './userSlice';

const reducer = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default reducer;