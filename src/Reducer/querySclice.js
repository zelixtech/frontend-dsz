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
        setLostQuery(state, action) {
            state.LostQuery = action.payload;
        },
        setCloseQuery(state, action) {
            state.CloseQuery = action.payload;
        },
        setUAQID(state, action) {
            state.UAQID = action.payload;
        },
        setAQID(state, action) {
            state.AQID = action.payload;
        },
        setLQID(state, action) {
            state.LQID = action.payload;
        },
        setCQID(state, action) {
            state.CQID = action.payload;
        },

    }
})

export const { setAssignQuery, setUnassignQuery, setCloseQuery, setLostQuery, setUAQID, setAQID, setLQID, setCQID } = querySlice.actions;
export default querySlice.reducer;


export function fechUnAssignQuery() {

    return async function fechUnAssignQueryThunk(dispatch, getState) {
        try {

            var config = {
                method: 'get',
                url: `http://localhost:5000/api/query/all/unassigned/active`,
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
                        if (resData.data[0]) {
                            dispatch(setUAQID(resData.data[0].query_id))
                        } else {
                            dispatch(setUAQID(undefined))
                        }
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
                // url: `${process.env.REACT_APP_HOST}/api/query/all/employee/1`,
                url: `http://localhost:5000/api/query/all/employee?employee_id=1&query_state=running`,
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
                        if (resData.data[0]) {
                            dispatch(setAQID(resData.data[0].query_id));
                        } else {
                            dispatch(setAQID(undefined));
                        }
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


export function fechLostQuery() {

    return async function fechLostQueryThunk(dispatch, getState) {
        try {

            var config = {
                method: 'get',
                // url: `${process.env.REACT_APP_HOST}/api/query/all/employee/1`,
                url: `http://localhost:5000/api/query/all/employee?employee_id=1&query_state=lost`,
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    var resData = response.data;
                    if (resData.error) {
                        console.log("error while fatching querys assign to Employee");
                    } else {
                        dispatch(setLostQuery(resData.data));
                        if (resData.data[0]) {
                            dispatch(setLQID(resData.data[0].query_id));
                        } else {
                            dispatch(setLQID(undefined));
                        }
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


export function fechCloseQuery() {

    return async function fechCloseQueryThunk(dispatch, getState) {
        try {

            var config = {
                method: 'get',
                // url: `${process.env.REACT_APP_HOST}/api/query/all/employee/1`,
                url: `http://localhost:5000/api/query/all/employee?employee_id=1&query_state=close`,
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    var resData = response.data;
                    if (resData.error) {
                        console.log("error while fatching close querys assign to Employee");
                    } else {
                        dispatch(setCloseQuery(resData.data));

                        if (resData.data[0]) {
                            dispatch(setCQID(resData.data[0].query_id));

                        } else {
                            dispatch(setCQID(undefined));
                        }
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


