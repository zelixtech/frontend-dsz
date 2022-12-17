// import { useEffect } from 'react'
import Followup from './Followup'
import { usePopups } from '../../PopupsContext'
import SidebarClientinfo from './SidebarClientinfo';
import { useSelector } from 'react-redux';


function RunningSidebar() {

    const { chat } = usePopups();
    const [ChatPopup, SetChatPopup] = chat


    const Querys = useSelector((state) => state.query.AssignQuery);
    const AQID = useSelector((state) => state.query.AQID);

    if (!AQID || !Querys) {
        return "Loading Requerment Details"
    }

    const req = Querys.filter((obj) => {
        return obj.query_id === parseInt(AQID);
    })


    return (
        <div className='mx-6 mt-10 felx flex-col text-[14px] text-black'>

            <div>

                <SidebarClientinfo Name={"vishal savaliya"} Email={"vsleitan.work@gmail.com"} Mobile={"91 9510342875"} Status="New" />

                <div className='pt-5'>
                    <h1 className='text-sm text-black'>{req[0].query_subject}</h1>
                </div>
            </div>


            <hr className='mx-auto my-2 mb-3 w-[60%] bg-blue-500 h-[2px]' />

            <h1 className='text-primary font-medium py-3'>Requirement Details</h1>


            {/* <h1 className='text-black font-medium py-2'>Query Details</h1> */}

            <div className='max-h-[350px] overflow-y-scroll'>

                {/* section No 2 */}

                <div className='pb-1'>

                    <div>
                        <h1 className='text-gray-400'>Inquery on</h1>
                        <p>{req[0].query_create_time.split("T")[0]} {req[0].query_create_time.split("T")[1].split(".")[0]}</p>
                    </div>

                    <div className='pt-2'>
                        <h1 className='text-gray-400'>Message</h1>
                        <p className='text-[14px] text-justify pr-4'>{req[0].query_message}</p>
                    </div>


                </div>

                {/* section no 3 */}

                {/* <hr className='mx-auto my-2 mb-3 w-[60%] bg-blue-500 h-[2px]' /> */}

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


            <hr className='mx-auto my-2 mb-3 w-[60%] bg-blue-500 h-[2px]' />

            <h1 className='text-primary font-medium py-3'>Follow Ups</h1>

            <div className='max-h-[350px] overflow-y-scroll'>
                <Followup Date={"7 Nov 2022"} Detail={"Qoutation sended"} />
                <Followup Date={"9 Nov 2022"} Detail={"will call later"} />
                <Followup Date={"11 Nov 2022"} Detail={"the client is busy."} />
            </div>

            <div className='flex flex-col mt-4'>
                <label className='text-primary'>Follow Up</label>
                <textarea className="my-2 pl-2 h-6 outline-none border-b-2 border-green-500" type="text" ></textarea>
                <button className='px-4 py-2 mb-2 mx-2 bg-primary text-white font-medium rounded-md shadow-md' >Save</button>
            </div >

            <div className='mt-8 mb-5 text-[14px]'>
                <div className='flex flex-col justify-center items-center'>



                    <button onClick={() => SetChatPopup(true)} className='w-[95%] px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow-md'>Chat</button>

                    <div className='flex justify-between w-[95%] mt-3'>

                        <button className='w-[48%] px-4 py-2 mb-2 bg-primary text-white font-medium rounded-md shadow-md' >Lost</button>
                        <button className='w-[48%] px-4 py-2 mb-2 bg-primary text-white font-medium rounded-md shadow-md' >Close</button>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default RunningSidebar