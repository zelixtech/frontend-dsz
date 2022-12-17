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
    }
})

export const { setUser, setDept } = userSlice.actions;
export default userSlice.reducer;