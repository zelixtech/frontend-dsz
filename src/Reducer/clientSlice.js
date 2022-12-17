import axios from 'axios';
const { createSlice } = require('@reduxjs/toolkit');

const clientSlice = createSlice({
    name: 'client',
    initialState: {},
    reducers: {
        setClients(state, action) {
            state.clients = action.payload;
        },
        setActiveClient(state, action) {
            state.activeClientId = action.payload;
        }
    }
})

export const { setClients, setActiveClient } = clientSlice.actions;
export default clientSlice.reducer;


export function fechClients() {

    return async function fechClientsThunk(dispatch, getState) {
        try {

            var config = {
                method: 'get',
                url: 'http://184.72.65.91:3000/api/client/all',
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    var resData = response.data;
                    dispatch(setClients(resData.data));
                    dispatch(setActiveClient(resData.data[0].client_id));
                })
                .catch(function (error) {
                    console.log(error);
                });


        } catch (error) {
            console.log(error);
        }
    }

}