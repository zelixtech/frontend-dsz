const { createSlice } = require('@reduxjs/toolkit');

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {},
    reducers: {
        setInputFilter(state, action) {
            state.Input = action.payload;
        },
        setSortFilter(state, action) {
            state.Sort = action.payload;
        },
        setSortFilterType(state, action) {
            state.SortType = action.payload;
        }
    }
})

export const { setInputFilter, setSortFilter, setSortFilterType } = filtersSlice.actions;
export default filtersSlice.reducer;