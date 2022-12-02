import React from 'react'
import {
    UserCircleIcon,
    Squares2X2Icon,
    BellAlertIcon,
    UserGroupIcon,
    Cog8ToothIcon,
} from '@heroicons/react/24/outline'
import SidebarOption from '../SidebarOption';

function Sidebar() {

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
                        <h1 className='text-md font-medium'>Alex Jcob</h1>
                        <p className='text-sm text-gray-400'>alexjcon@gmail.com</p>
                    </div>

                </div>

            </div>

            <hr className='mx-auto my-2 w-[60%] bg-primary h-[2px]' />


            <div className='mt-10'>
                <SidebarOption link={"requirements"} Icon={Squares2X2Icon} Title={"DashBoard"} />
                <SidebarOption link={"clients"} Icon={UserGroupIcon} Title={"Clients"} />
                <SidebarOption link={"notification"} Icon={BellAlertIcon} Title={"Notifications"} />
                <SidebarOption link={"settings"} Icon={Cog8ToothIcon} Title={"Settings"} />
            </div>

        </div>
    )
}

export default Sidebar;