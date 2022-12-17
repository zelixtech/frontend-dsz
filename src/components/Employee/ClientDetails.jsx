import React from 'react'
import { useDispatch } from 'react-redux';
import { setActiveClient } from '../../Reducer/clientSlice';

function ClientDetails({ Username, MobileNo, Email, Company, Status, ClientId }) {

    const dispatch = useDispatch();

    return (
        <div className='px-4 py-2 mx-4 my-2 flex justify-between items-center bg-white shadow-md  rounded-md'>
            <div className='px-2 w-[35%]'>
                <h1 className='text-base font-500'>
                    {Username}
                </h1>
                <p className='text-gray-400'>{MobileNo}</p>
            </div>
            <div className='px-5 w-[35%]'>
                <p className='text-black overflow-x-hidden'>{Company}</p>
                <p className='text-gray-400'>{Email}</p>
            </div>
            <div className='px-5 w-[15%]'>
                <p className='flex items-center justify-center h-8 bg-blue-100 text-sm w-[60px] text-center font-[400] text-blue-500 rounded-[4px] shadow-sm'>{Status}</p>
            </div>
            <div className='flex items-center px-2 w-[15%]'>
                <button className='px-4 py-1 h-8 bg-primary text-base font-[400] text-white rounded-[4px] shadow-sm' id={ClientId} onClick={(e) => {
                    dispatch(setActiveClient(e.target.id))
                    // console.log(e.target.id);
                }}
                > View </button>
            </div>
        </div>
    )
}

export default ClientDetails