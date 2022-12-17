import React from 'react'
import { useDispatch } from 'react-redux'
import { setUAQID } from '../../Reducer/querySclice';

function ClientRequest({ request, requestCatagory, date, Status, Lastseen, QueryId }) {


    const dispatch = useDispatch();

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

            {Status === "New" ? <button className='px-3 py-1 h-8 bg-blue-500 text-base font-[400] text-white rounded-[4px] shadow-sm'> Assign ME </button>
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