import React from 'react'

function ClientDetails({ Username, MobileNo, Email, Company }) {
    return (
        <div className='px-4 py-2 mx-4 my-2 flex justify-between items-center bg-white shadow-md  rounded-md'>
            <div className='px-2'>
                <h1 className='text-base font-500'>
                    {Username}
                </h1>
                <p className='text-gray-400'>{MobileNo}</p>
            </div>
            <div className='px-5'>
                <p className='text-black overflow-x-hidden'>{Company}</p>
                <p className='text-gray-400'>{Email}</p>
            </div>
            <div className='flex items-center px-2'>
                <button className='px-2 py-1 h-8 bg-blue-100 text-base font-[400] text-primary rounded-md shadow-sm'> View </button>
            </div>
        </div>
    )
}

export default ClientDetails