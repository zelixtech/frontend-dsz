import React from 'react'
import {
    UserCircleIcon,
    Squares2X2Icon,
    CalendarDaysIcon,
    UserPlusIcon,
    Cog8ToothIcon,
} from '@heroicons/react/24/outline'
import SidebarOption from '../SidebarOption';

function HrSidebar() {

    const Active = true;

    return (
        <div className='basis-[17%]  h-screen'>

            {/* Employee details */}

            <div className='p-2 m-2 mt-7 flex items-center justify-center'>

                <div className='flex items-center'>
                    <div className='w-9 h-9 bg-indigo-100 outline outline-primary outline-2 rounded-md p-1 mx-1'>
                        <UserCircleIcon className='stroke-primary' />
                    </div>
                    <div className='mx-2'>
                        <h1 className='text-md font-medium'>Nishant Patel</h1>
                        <p className='text-sm text-gray-400'>NishantPatel@gmail.com</p>
                    </div>

                </div>

            </div>

            <hr className='mx-auto my-2 w-[60%] bg-primary h-[2px]' />


            <div className='mt-10'>
                <SidebarOption link={"Staff"} Icon={Squares2X2Icon} Title={"DashBoard"} />
                <SidebarOption link={"Addmember"} Icon={UserPlusIcon} Title={"Add Member"} />
                <SidebarOption link={"Attendance"} Icon={CalendarDaysIcon} Title={"Attendance"} />
                <SidebarOption link={"settings"} Icon={Cog8ToothIcon} Title={"Settings"} />
            </div>

        </div>
    )
}

export default HrSidebar;