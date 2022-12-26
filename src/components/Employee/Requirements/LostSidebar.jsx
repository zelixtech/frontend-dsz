import { useState, useEffect } from 'react';
import Followup from './Followup';
import { usePopups } from '../../PopupsContext';
import SidebarClientinfo from './SidebarClientinfo';
import { useSelector, useDispatch } from 'react-redux';
import { fechAssignQuery, fechLostQuery, fechCloseQuery } from '../../../Reducer/querySclice';
import axios from 'axios';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function LostSidebar() {

    const dispatch = useDispatch();

    const { chat } = usePopups();
    const [ChatPopup, SetChatPopup] = chat;

    const [followups, setfollowups] = useState([]);

    const Querys = useSelector((state) => state.query.LostQuery);
    const LQID = useSelector((state) => state.query.LQID);

    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://localhost:5000/api/followup/all/${LQID}`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                const resData = response.data;

                if (resData.error) {
                    console.log(resData.error);
                } else {
                    setfollowups(resData.data);
                    console.log(resData)
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [LQID]);

    const HandelSendToRunning = () => {

        var data = JSON.stringify({
            "data": {
                "query_state": "running"
            }
        });

        var config = {
            method: 'patch',
            url: `http://localhost:5000/api/query/status/${LQID}`,
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

                    Store.addNotification({
                        title: "Not Able Updating Status Of Request",
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

                    Store.addNotification({
                        title: "Request Sended To Running Successfully",
                        message: "Success",
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
                    dispatch(fechAssignQuery());
                    dispatch(fechLostQuery());
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

    const HandelSendToClose = () => {

        var data = JSON.stringify({
            "data": {
                "query_state": "close"
            }
        });

        var config = {
            method: 'patch',
            url: `http://localhost:5000/api/query/status/${LQID}`,
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

                    Store.addNotification({
                        title: "Not Able Updating Status Of Request",
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

                    Store.addNotification({
                        title: "Request Sended To Close Successfully",
                        message: "Success",
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });

                    dispatch(fechLostQuery());
                    dispatch(fechCloseQuery());

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

    if (!LQID || !Querys) {
        return <div className='flex justify-center items-center text-blue-500 mt-20'>Loading Requerment Details </div>
    }

    const req = Querys.filter((obj) => {
        return obj.query_id === parseInt(LQID);
    })

    if (!req[0]) {
        return <div className='flex justify-center items-center text-blue-500 mt-20'>Loading Requerment Details </div>
    }

    return (
        <div className='mx-6 mt-10 felx flex-col text-[14px] text-black'>

            <div>

                <SidebarClientinfo Name={req[0].client.client_name} Email={req[0].client.client_email} Mobile={req[0].client.client_mobile} Status="New" />

                <div className='pt-5'>
                    <h1 className='text-sm text-black'>{req[0].query_subject}</h1>
                </div>
            </div>


            <hr className='mx-auto my-2 mb-3 w-[60%] bg-blue-500 h-[2px]' />

            <h1 className='text-primary font-medium py-3'>Requirement Details</h1>


            {/* <h1 className='text-black font-medium py-2'>Query Details</h1> */}

            <div className='max-h-[350px] overflow-y-scroll'>

                {/* section No 2 */}

                <div className='pb-1'>

                    <div>
                        <h1 className='text-gray-400'>Inquery on</h1>
                        <p>{req[0].query_create_time.split("T")[0]} {req[0].query_create_time.split("T")[1].split(".")[0]}</p>
                    </div>

                    <div className='pt-2'>
                        <h1 className='text-gray-400'>Message</h1>
                        <p className='text-[14px] text-justify pr-4'>{req[0].query_message}</p>
                    </div>


                </div>

                {/* section no 3 */}

                {/* <hr className='mx-auto my-2 mb-3 w-[60%] bg-blue-500 h-[2px]' /> */}

                <div>
                    <div className='flex justify-between w-[90%] py-2'>
                        <div>
                            <h1 className='text-gray-400'>Location</h1>
                            <p>{req[0].client.client_city}</p>
                        </div>

                        <div>
                            <h1 className='text-gray-400'>Source</h1>
                            <p>{req[0].query_source}</p>
                        </div>
                    </div>

                    <div className='pt-2'>
                        <h1 className='text-gray-400'>Company/Ind</h1>
                        <p className='text-black'>{req[0].client.client_industry}</p>
                    </div>

                    <div className='py-2'>
                        <h1 className='text-gray-400'>Address</h1>
                        <p className='text-black pr-4'>{req[0].client.client_address}</p>
                    </div>
                </div>

            </div>


            <hr className='mx-auto my-2 mb-3 w-[60%] bg-blue-500 h-[2px]' />

            <h1 className='text-primary font-medium py-3'>Follow Ups</h1>

            <div className='max-h-[350px] overflow-y-scroll'>

                {
                    followups.map((fup, id) => {
                        return (
                            <Followup Date={fup.createdAt.split("T")[0]} Detail={fup.followup_text} key={id} FollowupNo={id + 1} State="Lost" />
                        )
                    })
                }

            </div>

            {/* <div className='flex flex-col mt-4'>
                <label className='text-primary'>Follow Up</label>
                <textarea className="my-2 pl-2 h-6 outline-none border-b-2 border-green-500" type="text" ></textarea>
                <button className='px-4 py-2 mb-2 mx-2 bg-primary text-white font-medium rounded-md shadow-md' >Save</button>
            </div > */}

            <div className='mt-8 mb-5 text-[14px]'>
                <div className='flex flex-col justify-center items-center'>
                    <button className='w-[95%] px-4 py-2 mb-2 bg-primary text-white font-medium rounded-md shadow-md' onClick={() => { HandelSendToRunning() }} >Send to Running</button>
                    <button className='w-[95%] px-4 py-2 mb-2 bg-primary text-white font-medium rounded-md shadow-md' onClick={() => { HandelSendToClose() }} >Send to Close</button>
                    <button onClick={() => SetChatPopup(true)} className='w-[95%] px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow-md'>Chat</button>
                </div>
            </div>

        </div>
    )
}

export default LostSidebar