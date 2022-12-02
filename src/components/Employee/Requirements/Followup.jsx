import React from 'react'

function Followup({ Date, Detail }) {
    return (
        <div className='shadow-md p-3 mx-4 my-2 rounded-sm'>
            <h1 className='text-right text-gray-400 text-sm'>{Date}</h1>
            <p className='p-3 text-black'>{Detail}</p>
        </div>
    )
}

export default Followup