import React from 'react'
import { Link } from 'react-router-dom'

function SidebarOption({ Active, Icon, Title, link }) {
    return (

        <div className={Active ? `flex justify- start pl-4 my-4 align-baseline text-indigo-500 border-l-4 border-indigo-500` : `flex justify-start pl-5 my-4 align-baseline text-[#b2b2b4]`}>

            <Link to={link} className="flex" >
                <Icon className='w-6' />
                <p className='pl-4 text-base font-medium'>{Title}</p>
            </Link>
        </div>
    )
}

export default SidebarOption