import React from 'react'

function StaffDetails({ Name, Email, Position, Contact }) {
    return (
        <div className='px-4 py-2 mx-4 my-2 flex justify-between items-center bg-white shadow-md  rounded-md'>
            <div>
                <h1 className='text-base font-400'>
                    {Name}
                </h1>
                <p className='text-gray-400 text-sm'>{Position}</p>
            </div>

            {/* <h1 className='border-l-2 h-10 w-5 border-gray-300'></h1> */}

            <div>
                <h1 className='text-base font-400'>{Email}</h1>
                <p className='text-gray-400 text-sm'>{Contact}</p>
            </div>


            {/* <h1 className='border-l-2 h-10 w-5 border-gray-300'></h1> */}

            <button className='px-2 py-1 h-8 bg-blue-100 text-base font-[400] text-primary rounded-md shadow-sm'> View </button>


        </div>
    )
}

export default StaffDetails