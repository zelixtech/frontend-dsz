import React from 'react'
import { useSelector } from 'react-redux';
import { usePopups } from '../../PopupsContext'
import { useDispatch } from 'react-redux';
import { fechUnAssignQuery } from '../../../Reducer/querySclice';
import axios from 'axios';

function NewRightsidebar() {

    const dispatch = useDispatch();

    const { qoutation } = usePopups();
    const [NewQoutation, SetNewQoutation] = qoutation;


    const Querys = useSelector((state) => state.query.UnassignQuery);
    const UAQID = useSelector((state) => state.query.UAQID);

    if (!UAQID || !Querys) {
        return "Loading Requerment Details"
    }

    const req = Querys.filter((obj) => {
        return obj.query_id === parseInt(UAQID);
    })

    const ClientId = req[0].client.client_id;

    const HandelBlock = () => {


        var config = {
            method: 'patch',
            url: `http://localhost:5000/api/client/${ClientId}/block`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                dispatch(fechUnAssignQuery());
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    // console.log(req);/


    return (
        <div className='mx-6 mt-10 felx flex-col text-[14px] text-black'>

            <div>

                <span className='flex items-center'>
                    <h1 className="headline">{req[0].client.client_name}</h1>
                    <p className='mx-6 bg-gray-400  text-white px-2 rounded-sm font-medium'>New</p>
                </span>

                <div className='pt-2 text-gray-400'>
                    <p className=''>{req[0].client.client_email}</p>
                    <p>{req[0].client.client_mobile}</p>
                </div>

                <div className='pt-5'>
                    <h1 className='headline'>{req[0].query_subject}</h1>
                </div>
            </div>


            <hr className='mx-auto my-2 mb-3 w-[60%] bg-indigo-500 h-[2px]' />



            <div className='h-[55vh] overflow-y-scroll'>

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

                <hr className='mx-auto my-2 mb-3 w-[60%] bg-indigo-500 h-[2px]' />

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

            <div className='mt-6 mb-20 text-[14px]'>
                <div className='flex justify-center items-center'>
                    <button onClick={() => SetNewQoutation(true)} className='px-4 py-2 bg-primary text-white font-medium rounded-md shadow-md' >Create Quotation</button>
                    <button className='ml-2 px-4 py-2 bg-rose-500 text-white font-medium rounded-md shadow-md' onClick={() => { HandelBlock() }}>Block Client</button>
                </div>
            </div>

        </div>
    )
}

export default NewRightsidebar;