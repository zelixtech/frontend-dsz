import React from 'react'
import {
    EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'

function AttendanceSidebar() {

    const AttendanceData = [1, 1, 1, 1, 2, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0, 1, 0, 1, 1, 1, -1, -1, -1, -1, -1, -1]

    return (
        <div className='mx-6 mt-10 felx flex-col text-[14px] text-black'>

            <div>

                <span className='flex items-center justify-between'>
                    <h1 className="headline">Shreeji Sangani</h1>
                    <p className='w-5 mr-3'><EllipsisVerticalIcon /> </p>
                </span>

                <div className='pt-2 text-gray-400'>
                    <p>Shreejisangani@gmail.com</p>
                    <p>+91 9510342875</p>
                </div>

            </div>


            <hr className='mx-auto my-4 mb-3 w-[60%] bg-indigo-500 h-[2px]' />


            <div className=''>

                {/* section No 2 */}

                <div className='grid grid-cols-7 pb-1 mt-7'>

                    <div className='font-medium text-[#878787]'>MON</div>
                    <div className='font-medium text-[#878787]'>TUE</div>
                    <div className='font-medium text-[#878787]'>WED</div>
                    <div className='font-medium text-[#878787]'>THE</div>
                    <div className='font-medium text-[#878787]'>FRI</div>
                    <div className='font-medium text-[#878787]'>SUR</div>
                    <div className='font-medium text-[#878787]'>SUN</div>

                    {
                        AttendanceData.map((data, i) => {

                            let div;

                            if (data === 1) {
                                div = < div className="text-green-500 text-center py-2" > {i + 1}</div>
                            }
                            else if (data === 2) {
                                div = < div className="text-purple-500 text-center py-2" > {i + 1}</div>
                            }
                            else if (data === 0) {

                                div = < div className="text-rose-500 text-center py-2" > {i + 1}</div>
                            }
                            else if (data === -1) {
                                div = < div className="text-gray-500 text-center py-2" > {i + 1}</div>
                            }

                            return (
                                <>
                                    {div}
                                </>

                            )
                        })
                    }

                </div>

                {/* section no 3 */}

                <hr className='mx-auto my-3 w-[60%] bg-indigo-500 h-[2px]' />

                <div className='flex items-center justify-between mt-6'>

                    <div>
                        <p className='text-blue-500 text-lg text-center font-medium'>17</p>
                        <h1 className='text-xs font-400'>Total Attendance</h1>
                    </div>

                    <div>
                        <p className='text-purple-500 text-lg text-center font-medium'>5</p>
                        <h1 className='text-xs font-400'>Half Leave</h1>
                    </div>

                    <div>
                        <p className='text-rose-500 text-lg text-center font-medium'>3</p>
                        <h1 className='text-xs font-400'>Total Leave</h1>
                    </div>

                </div>

            </div>

            <div className='my-6 mx-auto w-[-webkit-fill-available]  text-[14px]  fixed bottom-2'>

                <button className='px-4 py-2 w-[85%] mx-auto bg-primary text-white font-medium rounded-md shadow-md' >Edit</button>

            </div>

        </div>
    )
}

export default AttendanceSidebar