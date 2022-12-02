import React from 'react'
import {
    EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'
import { usePopups } from '../PopupsContext';
import EditEmployeeDetails from '../Popups/EditEmployeeDetails';


function StaffSidebar() {

    const { employee } = usePopups();

    const [EditStaffDetails, SetEditStaffDetails] = employee;

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

                <div className='pb-1 mt-7'>

                    <div className='flex justify-between w-[90%] py-2'>
                        <div>
                            <h1 className='text-gray-400'>Date of Joinonig</h1>
                            <p>15 Nov 2022 </p>
                        </div>

                        <div>
                            <h1 className='text-gray-400'>Relieve Date</h1>
                            <p>--</p>
                        </div>
                    </div>

                    <div className='pt-2'>
                        <h1 className='text-gray-400'>Office Mail</h1>
                        <p className='text-black'>Shreeji@darshansafatyzon.in</p>
                    </div>

                </div>

                {/* section no 3 */}

                <hr className='mx-auto my-3 w-[60%] bg-indigo-500 h-[2px]' />

                <div className='mt-7'>
                    <div className='flex justify-between w-[90%] py-2'>
                        <div>
                            <h1 className='text-gray-400'>DOB</h1>
                            <p>27/10/2001</p>
                        </div>

                        <div>
                            <h1 className='text-gray-400'>Mobile No</h1>
                            <p>+91 9510704050</p>
                        </div>
                    </div>

                    <div className='pt-2'>
                        <h1 className='text-gray-400'>Email</h1>
                        <p className='text-black'>Shreejisangani@gmail</p>
                    </div>

                    <div className='py-2'>
                        <h1 className='text-gray-400'>Address</h1>
                        <p className='text-black pr-4'>13/Keyur Park, Nr.-Sukan Bunglows, Nikol-naroda Road, Ahmedabad-382345</p>
                    </div>
                </div>



                <hr className='mx-auto my-3 w-[60%] bg-indigo-500 h-[2px]' />

                <div className='mt-7 mb-8'>

                    <div className='pt-2'>
                        <h1 className='text-gray-400'>Name (Given in Bank)</h1>
                        <p className='text-black'>Shreeji sangani</p>
                    </div>

                    <div className='py-2'>
                        <h1 className='text-gray-400'>Bank Name</h1>
                        <p className='text-black pr-4'>HDFC BANK</p>
                    </div>

                    <div className='pt-2'>
                        <h1 className='text-gray-400'>Branch Name</h1>
                        <p className='text-black'>Nikol shakha</p>
                    </div>

                    <div className='py-2'>
                        <h1 className='text-gray-400'>Account No</h1>
                        <p className='text-black pr-4'>159510342875</p>
                    </div>
                    <div className='py-2'>
                        <h1 className='text-gray-400'>IFSC Code</h1>
                        <p className='text-black pr-4'>HDFN04040</p>
                    </div>
                </div>

            </div>

            <div className='my-6 mx-auto text-[14px]'>

                <button className='px-4 py-2 w-[95%] mx-auto bg-primary text-white font-medium rounded-md shadow-md' onClick={() => { SetEditStaffDetails(true) }} >Edit</button>

            </div>

            <EditEmployeeDetails visible={EditStaffDetails} close={SetEditStaffDetails} />


        </div>
    )
}

export default StaffSidebar