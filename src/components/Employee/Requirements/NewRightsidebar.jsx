import React from 'react'
import { usePopups } from '../../PopupsContext'

function NewRightsidebar() {

    const { qoutation } = usePopups();
    const [NewQoutation, SetNewQoutation] = qoutation;

    return (
        <div className='mx-6 mt-10 felx flex-col text-[14px] text-black'>

            <div>

                <span className='flex items-center'>
                    <h1 className="headline">vishal savaliya</h1>
                    <p className='mx-6 bg-gray-400  text-white px-2 rounded-sm font-medium'>New</p>
                </span>

                <div className='pt-2 text-gray-400'>
                    <p className=''>vsleitan@gmail.com</p>
                    <p>+91 9510342875</p>
                </div>

                <div className='pt-5'>
                    <h1 className='headline'>Requirement for Heat Resistant Safety Cover</h1>
                </div>
            </div>


            <hr className='mx-auto my-2 mb-3 w-[60%] bg-indigo-500 h-[2px]' />



            <div className='h-[55vh] overflow-y-scroll'>

                {/* section No 2 */}

                <div className='pb-1'>

                    <div>
                        <h1 className='text-gray-400'>Inquery on</h1>
                        <p>7 nov 2022, 18:36:41</p>
                    </div>

                    <div className='pt-2'>
                        <h1 className='text-gray-400'>Message</h1>
                        <p className='text-[14px] text-justify pr-4'>My Requirement is for Heat Resistant Safety Cover. Kindly send me price and other details. Why do you need this : For Business Use Preferred Location : Suppliers from Pune will be Preferred</p>
                    </div>


                </div>

                {/* section no 3 */}

                <hr className='mx-auto my-2 mb-3 w-[60%] bg-indigo-500 h-[2px]' />

                <div>
                    <div className='flex justify-between w-[90%] py-2'>
                        <div>
                            <h1 className='text-gray-400'>Location</h1>
                            <p>Pune maharashtra</p>
                        </div>

                        <div>
                            <h1 className='text-gray-400'>Source</h1>
                            <p>India mart</p>
                        </div>
                    </div>

                    <div className='pt-2'>
                        <h1 className='text-gray-400'>Company/Ind</h1>
                        <p className='text-black'>Kinemach Engineering And Machines Private Limited</p>
                    </div>

                    <div className='py-2'>
                        <h1 className='text-gray-400'>Address</h1>
                        <p className='text-black pr-4'>Ground Floor Gat Number 621 Borade Vasti Savata Mali Nagar, Pune, Maharashtra, 412105</p>
                    </div>
                </div>

            </div>

            <div className='mt-6 mb-20 text-[14px]'>
                <div className='flex justify-center items-center'>
                    <button onClick={() => SetNewQoutation(true)} className='px-4 py-2 bg-primary text-white font-medium rounded-md shadow-md' >Create Quotation</button>
                    <button className='ml-2 px-4 py-2 bg-rose-500 text-white font-medium rounded-md shadow-md'>Block Client</button>
                </div>
            </div>

        </div>
    )
}

export default NewRightsidebar;