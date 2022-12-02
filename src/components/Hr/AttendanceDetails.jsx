import React from 'react'

function AttendanceDetails({ Name, Position, Leave, Attendance, Halfleave }) {
    return (
        <div className='px-4 py-2 mx-4 my-2 flex items-center bg-white shadow-md  rounded-md'>

            <div className='w-[20%]'>
                <h1 className='text-base font-400'>
                    {Name}
                </h1>
                <p className='text-gray-400 text-sm'>{Position}</p>
            </div>


            <div className='flex items-center justify-center w-[68%]'>
                <h1 className='border-l-2 h-10 w-4 ml-6 mr-2 border-gray-300'></h1>
                <div>
                    <p className='text-blue-500 text-xl font-medium'>{Attendance}</p>
                    <h1 className='text-sm font-400'>Total Attendance</h1>
                </div>
                <h1 className='border-l-2 h-10 w-4 ml-6 mr-2 border-gray-300'></h1>
                <div>
                    <p className='text-purple-500 text-xl font-medium'>{Halfleave}</p>
                    <h1 className='text-sm font-400'>Half Leave</h1>
                </div>
                <h1 className='border-l-2 h-10 w-4 ml-6 mr-2 border-gray-300'></h1>
                <div>
                    <p className='text-rose-500 text-xl font-medium'>{Leave}</p>
                    <h1 className='text-sm font-400'>Total Leave</h1>
                </div>
                <h1 className='border-l-2 h-10 w-4 ml-6 mr-2 border-gray-300'></h1>
            </div>


            {/* <h1 className='border-l-2 h-10 w-5 border-gray-300'></h1> */}
            <div className='w-[12%]'>
                <button className='px-4 py-1 h-8 text-white text-base font-[400] bg-primary rounded-[4px] shadow-sm'> View </button>
            </div>


        </div>
    )
}

export default AttendanceDetails