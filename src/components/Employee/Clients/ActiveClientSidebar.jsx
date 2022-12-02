import React from 'react';
import Orders from '../Orders';

function ActiveClientSidebar() {
    return (
        <div className='mx-6 mt-10 felx flex-col text-black'>

            <div>
                <span className='flex items-center'>
                    <h1 className="headline">vishal savaliya</h1>
                    <p className='mx-6 bg-gray-400  text-white px-2 rounded-sm font-medium'>New</p>
                </span>

                <div className='pt-2 text-[14px] text-gray-400'>
                    <p className=''>vsleitan@gmail.com</p>
                    <p>+91 9510342875</p>
                </div>
            </div>

            <hr className='mx-auto my-3 mb-3 w-[60%] bg-indigo-500 h-[2px]' />


            {/* section No 2 Orers*/}

            <div className='flex flex-col h-[60vh] overflow-y-scroll  mr-2'>
                < Orders OrderId={1234567} OrderDate={"7 Nov 2022"} OrderSatus={"Running"} OrderDetails={"Requirement for Heat Resistant Safety Cover"} />
                < Orders OrderId={1234567} OrderDate={"7 Nov 2022"} OrderSatus={"Running"} OrderDetails={"Requirement for Heat Resistant Safety Cover"} />
                < Orders OrderId={1234567} OrderDate={"7 Nov 2022"} OrderSatus={"Running"} OrderDetails={"Requirement for Heat Resistant Safety Cover"} />
                < Orders OrderId={1234567} OrderDate={"7 Nov 2022"} OrderSatus={"Running"} OrderDetails={"Requirement for Heat Resistant Safety Cover"} />
                < Orders OrderId={1234567} OrderDate={"7 Nov 2022"} OrderSatus={"Running"} OrderDetails={"Requirement for Heat Resistant Safety Cover"} />
            </div>


            <div className='mt-6 mb-8 text-[14px] fixed bottom-0'>
                <div className='flex justify-center items-center'>
                    {/* <button className='px-4 py-2 bg-primary text-white font-medium rounded-md shadow-md' >Create Quotation</button> */}
                    <button className='ml-2 px-4 py-2 bg-rose-500 text-white font-medium rounded-md shadow-md'>Block Client</button>
                </div>
            </div>


        </div>
    )
}

export default ActiveClientSidebar