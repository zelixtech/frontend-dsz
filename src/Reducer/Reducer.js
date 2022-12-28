import { configureStore } from "@reduxjs/toolkit";

import userReducer from './userSlice';
import clientReducer from './clientSlice';
import queryReducer from './querySclice';
import filtersReducer from './filtersSlice';


const reducer = configureStore({
    reducer: {
        user: userReducer,
        client: clientReducer,
        query: queryReducer,
        filters: filtersReducer,
    },
});

export default reducer;