import React from 'react';
import {
    EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'

function SidebarClientinfo({ Name, Email, Mobile, Status }) {
    return (
        <>
            <span className='flex items-center justify-between'>

                <div className='flex'>
                    <h1 className="headline">{Name}</h1>
                    <p className='mx-6 bg-gray-400  text-white px-2 rounded-sm font-medium'>
                        {Status}
                    </p>
                </div>

                <p className='w-5 mr-3'><EllipsisVerticalIcon /> </p>

            </span>

            <div className='pt-2 text-gray-400'>
                <p className=''>{Email}</p>
                <p>{Mobile}</p>
            </div>
        </>
    )
}

export default SidebarClientinfo