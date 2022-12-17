import React from 'react'
import { setUAQID } from '../../Reducer/querySclice';
import axios from 'axios';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { useDispatch } from 'react-redux';
import { fechAssignQuery } from '../../Reducer/querySclice';
import { fechUnAssignQuery } from '../../Reducer/querySclice';

function ClientRequest({ request, requestCatagory, date, Status, Lastseen, QueryId }) {


    const dispatch = useDispatch();

    const handelAssignMe = () => {

        var data = JSON.stringify({
            "data": {
                "employee_id": 4,
                "query_id": QueryId
            }
        });

        var config = {
            method: 'patch',
            url: 'http://184.72.65.91:3000/api/query/assign',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));

                var resdata = response.data;

                if (resdata.error) {

                    // var errordata = errorMessages[resdata.errorMessage];

                    Store.addNotification({
                        title: resdata.errorType,
                        message: resdata.errorMessage,
                        type: "warning",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });

                } else {

                    dispatch(fechAssignQuery());
                    dispatch(fechUnAssignQuery());

                    Store.addNotification({
                        title: "Assign Successfully",
                        message: "Success",
                        type: "default",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });

                }
            })
            .catch(function (error) {
                console.log(error);

                Store.addNotification({
                    title: "Somting Went Wrong...",
                    message: "Server Side Error",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });
            });
    }

    return (
        <div className='px-4 py-2 mx-4 my-2 flex justify-between items-center bg-white shadow-md  rounded-md' id={QueryId} onClick={(e) => {
            dispatch(setUAQID(QueryId))
            console.log(QueryId)
        }}>
            <div>
                <h1 className='text-base font-400'>
                    {request}
                </h1>
                <p className='text-gray-400'>{requestCatagory}</p>
            </div>
            <div className='flex flex-col justify-center '>
                <p className='text-base text-center'>Order Date</p>
                <h1 className='text-gray-400 font-400'>{date}</h1>
            </div>

            {Status === "New" ? <button className='px-3 py-1 h-8 bg-blue-500 text-base font-[400] text-white rounded-[4px] shadow-sm' onClick={() => { handelAssignMe() }}> Assign ME </button>
                : (
                    <>
                        <div className='flex flex-col justify-center '>
                            <p className='text-base text-center'>Last Seen</p>
                            <h1 className='text-gray-400 font-400'>{Lastseen}</h1>
                        </div>
                        <button className='px-4 py-1 h-8 bg-blue-500 text-base font-[400] text-white rounded-[4px] shadow-sm'> View </button>
                    </>
                )}

        </div>
    )
}

export default ClientRequest