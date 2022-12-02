import React from 'react'

function ClientRequest({ request, requestCatagory, date, Status }) {
    return (
        <div className='px-4 py-2 mx-4 my-2 flex justify-between items-center bg-white shadow-md  rounded-md'>
            <div>
                <h1 className='text-base font-400'>
                    {request}
                </h1>
                <p className='text-gray-400'>{requestCatagory}</p>
            </div>
            <div>
                <h1 className='text-base font-400'>{date}</h1>
                <p className='text-gray-400'>Order Date</p>
            </div>

            {Status === "New" ? <button className='px-2 py-1 h-8 bg-blue-100 text-base font-[400] text-primary rounded-md shadow-sm'> Assign ME </button> :
                <button className='px-2 py-1 h-8 bg-blue-100 text-base font-[400] text-primary rounded-md shadow-sm'> View </button>
            }

        </div>
    )
}

export default ClientRequest