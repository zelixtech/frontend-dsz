import { configureStore } from "@reduxjs/toolkit";

import userReducer from './userSlice';
import clientReducer from './clientSlice';
import queryReducer from './querySclice';
import filtersReducer from './filtersSlice';
import employeeReducer from './employeeSlice';


const reducer = configureStore({
    reducer: {
        user: userReducer,
        client: clientReducer,
        query: queryReducer,
        employee: employeeReducer,
        filters: filtersReducer,
    },
});

export default reducer;