import { useEffect } from 'react'
import ClientRequest from '../ClientRequest';
import { fechAssignQuery } from '../../../Reducer/querySclice';
import { setAQID } from '../../../Reducer/querySclice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function Running() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fechAssignQuery());
    }, [])


    const AQuery = useSelector((state) => state.query.AssignQuery);

    if (!AQuery) {
        return "Loading Requrements...";
    }

    console.log(AQuery);

    return (
        <div className='my-5 overflow-y-scroll h-screen'>

            {
                AQuery.map((q, index) => {
                    return (
                        <div className='px-4 py-2 mx-4 my-2 flex justify-between items-center bg-white shadow-md  rounded-md' key={index}>
                            <div>
                                <h1 className='text-base font-400'>
                                    {q.query_subject}
                                </h1>
                                <p className='text-gray-400'>{q.query_product}</p>
                            </div>
                            <div className='flex flex-col justify-center '>
                                <p className='text-base text-center'>Order Date</p>
                                <h1 className='text-gray-400 font-400'>{q.createdAt.split("T")[0]}</h1>
                            </div>

                            <div className='flex flex-col justify-center '>
                                <p className='text-base text-center'>Last Seen</p>
                                <h1 className='text-gray-400 font-400'>{q.updatedAt.split("T")[0]}</h1>
                            </div>
                            <button className='px-4 py-1 h-8 bg-blue-500 text-base font-[400] text-white rounded-[4px] shadow-sm' id={q.query_id} onClick={(e) => {
                                dispatch(setAQID(e.target.id))
                            }}> View </button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Running;