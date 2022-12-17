import axios from 'axios';
const { createSlice } = require('@reduxjs/toolkit');

const querySlice = createSlice({
    name: 'query',
    initialState: {},
    reducers: {
        setUnassignQuery(state, action) {
            state.UnassignQuery = action.payload;
        },
        setAssignQuery(state, action) {
            state.AssignQuery = action.payload;
        },
        setUAQID(state, action) {
            state.UAQID = action.payload;
        },
        setAQID(state, action) {
            state.AQID = action.payload;
        },

    }
})

export const { setAssignQuery, setUnassignQuery, setUAQID, setAQID } = querySlice.actions;
export default querySlice.reducer;


export function fechUnAssignQuery() {

    return async function fechUnAssignQueryThunk(dispatch, getState) {
        try {

            var config = {
                method: 'get',
                url: 'http://184.72.65.91:3000/api/query/all/unassigned',
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    var resData = response.data;
                    if (resData.error) {
                        console.log("error while fatching querys");
                    } else {
                        dispatch(setUnassignQuery(resData.data));
                        dispatch(setUAQID(resData.data[0].query_id))
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });

        } catch (error) {
            console.log(error);
        }
    }

}


export function fechAssignQuery() {

    return async function fechAssignQueryThunk(dispatch, getState) {
        try {

            var config = {
                method: 'get',
                url: 'http://184.72.65.91:3000/api/query/all/employee/4',
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    var resData = response.data;
                    if (resData.error) {
                        console.log("error while fatching querys assign to Employee");
                    } else {
                        dispatch(setAssignQuery(resData.data));
                        dispatch(setAQID(resData.data.query_id));
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });

        } catch (error) {
            console.log(error);
        }
    }

}


