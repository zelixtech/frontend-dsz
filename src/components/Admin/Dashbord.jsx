import React from 'react'

function Dashbord() {
    return (
        <div className='basis-[83%] flex flex-col bg-bg'>

            <h1 className='text-xl font-medium text-black pt-5 pb-3 pl-3 mt-5 border-b border-gray-400 mx-7'>DashBoard</h1>


            <div className='bg-[#ffffffa2] h-full  mx-7 my-6 rounded-lg shadow-sm'>

                <div className='flex justify-start mx-4 mt-3'>

                    <div className='group'>
                        <button className='text-gray-700 px-5 pt-3 pb-2 focus:text-black focus:font-medium focus:border-b border-blue-500 hover:cursor-pointer'>Today</button>
                    </div>
                    <div className='group'>
                        <button className='text-gray-700 px-5 pt-3 pb-2 focus:text-black focus:font-medium focus:border-b border-blue-500 hover:cursor-pointer'>Weekly</button>
                    </div>
                    <div className='group'>
                        <button className='text-gray-700 px-5 pt-3 pb-2 focus:text-black focus:font-medium focus:border-b border-blue-500 hover:cursor-pointer'>Monthly</button>
                    </div>
                    <div className='group'>
                        <button className='text-gray-700 px-5 pt-3 pb-2 focus:text-black focus:font-medium focus:border-b border-blue-500 hover:cursor-pointer'>Yearly</button>
                    </div>

                </div>

                <div className='mx-12 flex justify-start items-start mt-10'>

                    <div className='w-[250px] h-[150px] shadow-md rounded-md flex mx-2 my-4 bg-[#ffffff]'>

                        <div className='w-1/2 flex justify-center items-center flex-col'>
                            <p className=' text-blue-500 text-2xl'>5</p>
                            <p className='!text-base pt-2 text-black'>Requirements</p>
                            {/* <p className='!text-sm pt-4'>30.45%</p> */}
                        </div>
                        <div className='w-1/2 flex justify-center items-center flex-col'>
                            <p className=' text-blue-500 text-2xl'>30.45%</p>
                            <p className='!text-base pt-2 text-black'>increments</p>
                        </div>

                    </div>
                    <div className='w-[250px] h-[150px] shadow-md rounded-md flex mx-2 my-4'>

                        <div className='w-1/2 flex justify-center items-center flex-col'>
                            <p className=' text-orange-500 text-2xl'>5</p>
                            <p className='!text-base pt-2 text-[#989EA7]'>New clients</p>
                            {/* <p className='!text-sm pt-4'>30.45%</p> */}
                        </div>
                        <div className='w-1/2 flex justify-center items-center flex-col'>
                            <p className=' text-orange-500 text-2xl'>22.65%</p>
                            <p className='!text-base pt-2 text-[#989EA7]'>increments</p>
                        </div>

                    </div>


                </div>
            </div>






        </div>
    )
}

export default Dashbord