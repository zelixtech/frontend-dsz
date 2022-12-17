import { configureStore } from "@reduxjs/toolkit";

import userReducer from './userSlice';
import clientReducer from './clientSlice';
import queryReducer from './querySclice';


const reducer = configureStore({
    reducer: {
        user: userReducer,
        client: clientReducer,
        query: queryReducer,
    },
});

export default reducer;