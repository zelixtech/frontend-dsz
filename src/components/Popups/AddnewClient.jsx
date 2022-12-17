import { useState } from 'react'
import {
    XCircleIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function AddnewClient({ visible, close }) {


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
            url: 'http://184.72.65.91:3000/api/client',
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

                    setClientData({
                        "client_name": "",
                        "client_mobile": "",
                        "client_email": "",
                        "client_address": "",
                        "client_city": "",
                        "client_industry": ""
                    })

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
                        <h1 className='heading'>Add New Client</h1>
                        <XCircleIcon onClick={() => close(false)} className="w-8" />
                    </div>
                </div>

                <div className='px-28 pb-20 w-[950px]'>

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
                        <label className='label'>Address</label>
                        <textarea className='NewEmployeeinput h-[100px]' type="text" name="client_address" onChange={(e) => { HandelClientDetailInput(e) }} value={ClientData.client_address} ></textarea>
                    </div>

                    <div>
                        <button className='py-2 px-6 mt-10 bg-green-500 text-white font-medium rounded-md shadow-sm' onClick={() => { HandelCreateClient() }} >Submit</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddnewClient