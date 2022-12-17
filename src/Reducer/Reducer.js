import { configureStore } from "@reduxjs/toolkit";

import userReducer from './userSlice';
import clientReducer from './clientSlice';


const reducer = configureStore({
    reducer: {
        user: userReducer,
        client: clientReducer,
    },
});

export default reducer;