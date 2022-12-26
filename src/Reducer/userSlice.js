const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setDept(state, action) {
            state.dept = action.payload;
        },
        setClient(state, action) {
            state.client = action.payload;
        }
    }
})

export const { setUser, setDept, setClient } = userSlice.actions;
export default userSlice.reducer;