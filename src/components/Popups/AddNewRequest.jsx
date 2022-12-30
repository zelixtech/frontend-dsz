import { useState, useEffect } from 'react'
import {
    XCircleIcon
} from '@heroicons/react/24/outline'
import axios from 'axios';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { fechUnAssignQuery } from '../../Reducer/querySclice';
import { useDispatch } from 'react-redux';

function AddNewRequest({ visible, close }) {

    const [IsNewClient, setIsNewClient] = useState(false)
    const [Client, setClient] = useState({});
    const [ClientName, setClientName] = useState();
    const [Clients, setClients] = useState([]);
    const dispatch = useDispatch();

    const HandelAddNewClient = () => {
        setIsNewClient(!IsNewClient);
    }

    useEffect(() => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_HOST}/api/client/all/active`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                var resData = response.data;

                if (resData.error) {

                    // var errordata = errorMessages[resdata.errorMessage];

                    Store.addNotification({
                        title: "Not Able to load Clients",
                        message: "Error while loading clients",
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

                    setClients(resData.data);

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    const errorMessages = {
        "Validation Error": {
            title: "Validation Error",
            message: "Please enter Valid Details",
        },
        "Client Already Exists": {
            title: "Client Already Exists",
            message: "Please Enter uniqe MobileNo and EmailId",
        },
    }


    const [ClientData, setClientData] = useState({
        "client_name": "",
        "client_mobile": "",
        "client_email": "",
        "client_address": "",
        "client_city": "",
        "client_industry": ""
    })


    const [ReqData, setReqData] = useState(
        {
            "client_id": "",
            "query_source": "",
            "query_create_time": Math.round((new Date()).getTime() / 1000),
            "query_subject": "",
            "query_product": "",
            "query_message": "",
            "query_state": "new"
        }
    )

    const HandelClientDetailInput = (e) => {

        var field = e.target.name;

        var preData = { ...ClientData };
        preData[field] = e.target.value;
        setClientData(preData);

        // console.log(ClientData)

    }

    const HandelCreateClient = () => {
        // console.log(ClientData);

        var data = JSON.stringify({
            "data": ClientData
        });

        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_HOST}/api/client`,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'darshanSession=s%3AgIDiWuErG9DzIfFSZAA7vb3DJXrttbPk.qsQccDQ7Jit7ZIq3jyEDvZkSkIb0sYq%2FTUEvdrcWKuI'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));

                var resdata = response.data;

                if (resdata.error) {

                    var errordata = errorMessages[resdata.errorMessage];

                    Store.addNotification({
                        title: errordata.title,
                        message: errordata.message,
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
                        title: "Client Created Successfully",
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

                    // setClientData({
                    //     "client_name": "",
                    //     "client_mobile": "",
                    //     "client_email": "",
                    //     "client_address": "",
                    //     "client_city": "",
                    //     "client_industry": ""
                    // })

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

    // select client

    const HandelClient = (e) => {
        // console.log(e.target.value);

        var client = Clients[e.target.value];

        var preData = { ...ReqData };
        preData["client_id"] = parseInt(client.client_id);
        setReqData(preData);

        setClient(client);
        setClientName(e.target.value)
        // console.log(ClientName);
    }


    const HandelReqDetailsinput = (e) => {
        var field = e.target.name;

        var preData = { ...ReqData };
        preData[field] = e.target.value;
        setReqData(preData);

    }

    const HandelCreateReq = (e) => {

        console.log(ReqData);

        var data = JSON.stringify({
            "data": ReqData
        });


        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_HOST}/api/query`,
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

                    dispatch(fechUnAssignQuery());

                    Store.addNotification({
                        title: "Requrement Created Successfully",
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


    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">

            <div className='w-[1000px] h-[85%] overflow-y-scroll bg-bg rounded-md'>

                <div className='sticky top-0 backdrop-blur-sm bg-bg bg-opacity-20'>
                    <div className='flex justify-between px-20 pt-5 pb-2'>
                        <h1 className='heading'>Add New Requirement</h1>
                        <XCircleIcon onClick={() => close(false)} className="w-8" />
                    </div>
                </div>

                <div className='px-28 pb-20 w-[950px]'>

                    <div className='mt-10'>

                        <input className='NewEmployeeinput' type="checkbox" name="employee_name" value="Add New Client" onChange={() => { HandelAddNewClient() }} />
                        <label className='pl-2'>Add New Client</label>
                    </div>

                    {
                        IsNewClient ? (

                            <div className='pt-6'>

                                <div className='flex flex-col'>
                                    <label className='label'>Client Name</label>
                                    <input className='NewEmployeeinput' type="text" name="client_name" onChange={(e) => { HandelClientDetailInput(e) }} value={ClientData.client_name} />
                                </div>

                                <div className='flex justify-between py-3'>

                                    <div className='flex flex-col'>
                                        <label className='label'>Email</label>
                                        <input className='NewEmployeeinput w-[300px]' type="email" name="client_email" onChange={(e) => { HandelClientDetailInput(e) }} value={ClientData.client_email} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='label'>Mobile No</label>
                                        <input className='NewEmployeeinput w-[300px]' type="tel" name="client_mobile" onChange={(e) => { HandelClientDetailInput(e) }} value={ClientData.client_mobile} />
                                    </div>

                                </div>

                                <div className='flex flex-col'>
                                    <label className='label'>City</label>
                                    <input className='NewEmployeeinput' type="text" name="client_city" onChange={(e) => { HandelClientDetailInput(e) }} value={ClientData.client_city} />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='label'>Company/Ind</label>
                                    <input className='NewEmployeeinput' type="text" name="client_industry" onChange={(e) => { HandelClientDetailInput(e) }} value={ClientData.client_industry} />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='label'>GSTN</label>
                                    <input className='NewEmployeeinput' type="text" name="client_GSTN" onChange={(e) => { HandelClientDetailInput(e) }} value={ClientData.client_GSTN} />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='label'>Address</label>
                                    <textarea className='NewEmployeeinput h-[100px]' type="text" name="client_address" onChange={(e) => { HandelClientDetailInput(e) }} value={ClientData.client_address} ></textarea>
                                </div>

                                <div className='flex flex-col'>
                                    <label className='label'>Address</label>
                                    <textarea className='NewEmployeeinput h-[100px]' type="text" name="client_address" onChange={(e) => { HandelClientDetailInput(e) }} value={ClientData.client_address} ></textarea>
                                </div>

                                <div>
                                    <button className='py-2 px-6 mt-10 bg-green-500 text-white font-medium rounded-md shadow-sm' onClick={() => { HandelCreateClient() }} >Add Client</button>
                                </div>

                            </div>
                        ) : " "
                    }

                    <div className='mt-5'>

                        <div className='flex flex-col pb-2'>
                            <label className='label'>Select Client</label>

                            {/* <input className='NewEmployeeinput' type="text" name="client_city" onChange={(e) => {}} value={} /> */}

                            <select name="clients" className='NewEmployeeinput' onChange={e => { HandelClient(e) }} defaultValue={ClientName || "Select Option"} value={ClientName || "Select Option"} >

                                <option value="Select Option" disabled hidden >Choose here</option>

                                {
                                    Clients.map((c, id) => {
                                        {/* console.log(c); */ }
                                        return (
                                            <option id={id} value={id} >{c.client_name}</option>
                                        )
                                    })
                                }
                            </select>

                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Requirements</label>
                            <input className='NewEmployeeinput' type="text" name="query_subject" onChange={(e) => { HandelReqDetailsinput(e) }} value={ReqData.query_subject} />
                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Product</label>
                            <input className='NewEmployeeinput' type="text" name="query_product" onChange={(e) => { HandelReqDetailsinput(e) }} value={ReqData.query_product} />
                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Source</label>
                            <input className='NewEmployeeinput' type="text" name="query_source" onChange={(e) => { HandelReqDetailsinput(e) }} value={ReqData.query_source} />
                        </div>

                        <div className='flex justify-between py-3'>

                            {/* <div className='flex flex-col'>
                                <label className='label'>Inquiry Date</label>
                                <input className='NewEmployeeinput w-[300px]' type="date" name="query_create_time" onChange={(e) => { HandelReqDetailsinput(e) }} value={ReqData.query_create_time} />
                            </div> */}
                            {/* <div className='flex flex-col'>
                                <label className='label'>Time</label>
                                <input className='NewEmployeeinput w-[300px]' type="time" name="" onChange={(e) => { HandelReqDetailsinput(e) }} value={ReqData.query_create_time} />
                            </div> */}

                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Message</label>
                            <textarea className='NewEmployeeinput h-[100px]' type="text" name="query_message" onChange={(e) => { HandelReqDetailsinput(e) }} value={ReqData.query_message} ></textarea>
                        </div>

                        <div>
                            <button className='py-2 px-6 mt-10 bg-green-500 text-white font-medium rounded-md shadow-sm ' onClick={(e) => { HandelCreateReq(e) }}>Submit</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddNewRequest;