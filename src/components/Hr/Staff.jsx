import React from 'react'
import HrSearchbar from './HrSearchbar'
import StaffDetails from './StaffDetails'
import StaffSidebar from './StaffSidebar'

function Staff({ HrInput, HrSearchHandler }) {
    return (
        <div className='basis-[83%] flex'>


            {/* main content  */}

            <div className='basis-[70%] bg-bg'>

                <HrSearchbar HrInput={HrInput} HrSearchHandler={HrSearchHandler} />

                {/* Staff  */}

                <div className='my-5 overflow-y-scroll h-screen'>
                    <StaffDetails Name={"Shreeji sangani"} Position={"Manager"} Contact={"+91 9510705040"} Email={"Shreejisangani@gmail.com"} />
                    <StaffDetails Name={"vs leitan"} Position={"Product Manager"} Contact={"+91 9510705040"} Email={"vsleitan@gmail.com"} />
                    <StaffDetails Name={"vs leitan"} Position={"Product Manager"} Contact={"+91 9510705040"} Email={"vsleitan@gmail.com"} />
                    <StaffDetails Name={"Shreeji sangani"} Position={"Manager"} Contact={"+91 9510705040"} Email={"Shreejisangani@gmail.com"} />
                    <StaffDetails Name={"Shreeji sangani"} Position={"Manager"} Contact={"+91 9510705040"} Email={"Shreejisangani@gmail.com"} />
                    <StaffDetails Name={"vs leitan"} Position={"Product Manager"} Contact={"+91 9510705040"} Email={"vsleitan@gmail.com"} />
                    <StaffDetails Name={"vs leitan"} Position={"Product Manager"} Contact={"+91 9510705040"} Email={"vsleitan@gmail.com"} />
                    <StaffDetails Name={"Shreeji sangani"} Position={"Manager"} Contact={"+91 9510705040"} Email={"Shreejisangani@gmail.com"} />
                </div>

            </div>



            {/* Rightsidebar  */}

            <div className='basis-[30%] overflow-y-scroll h-screen'>

                <div>
                    <StaffSidebar />
                </div>

            </div>

        </div>
    )
}

export default Staff