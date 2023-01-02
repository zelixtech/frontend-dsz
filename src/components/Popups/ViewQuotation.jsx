import React from 'react'
import {
    XCircleIcon
} from '@heroicons/react/24/outline'

function ViewQuotation({ visible, file, close }) {

    // console.log('http://localhost:8000/docs/' + file + ".pdf")

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">

            <div className='bg-white w-[1000px] h-[85%] overflow-y-scroll h-screen bg-bg rounded-md'>


                <div className='sticky top-0 backdrop-blur-sm bg-bg bg-opacity-20'>
                    <div className='flex justify-between px-20 pt-5 pb-2'>
                        <h1 className='heading'>View Quotation</h1>
                        <XCircleIcon onClick={() => close(false)} className="w-8" />
                    </div>
                </div>


                <object data={'http://localhost:8000/docs/' + file + ".pdf"} type="application/pdf" width="100%" height="100%" className='W-[90%] h-screen mx-auto'>
                    <div className='flex justify-center items-center mt-10'>
                        <button className=' py-2 px-4 bg-green-500 rounded-md shadow-sm text-white'>Regenerate Quotation</button>
                    </div>
                </object>

            </div>

        </div>
    )
}

export default ViewQuotation