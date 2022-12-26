import { useEffect } from 'react'
import { fechCloseQuery } from '../../../Reducer/querySclice';
import { setCQID } from '../../../Reducer/querySclice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function Close() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fechCloseQuery());
    }, [])


    const CQuery = useSelector((state) => state.query.CloseQuery);

    if (!CQuery) {
        return "Loading Requrements...";
    }

    // console.log(LQuery);

    return (
        <div className='my-5 overflow-y-scroll h-screen'>

            {
                CQuery.map((q, index) => {
                    return (
                        <div className='px-4 py-2 mx-4 my-2 flex justify-between bg-white shadow-md  rounded-md' key={index}>
                            <div className='w-[50%] pr-3'>
                                <h1 className='text-base font-400 whitespace-nowrap text-ellipsis max-w-sm overflow-hidden'>
                                    {q.query_subject}
                                </h1>
                                <p className='text-gray-400'>{q.query_product}</p>
                            </div>
                            <div className='flex flex-col w-[20%]'>
                                <p className='text-base'>Inquiry Date</p>
                                <p className='text-gray-400 font-400 text-sm'>{q.createdAt.split("T")[0]}</p>
                            </div>

                            <div className='flex flex-col w-[20%]'>
                                <p className='text-base'>Last Seen</p>
                                <p className='text-gray-400 font-400 text-sm'>{q.updatedAt.split("T")[0]}</p>
                            </div>
                            <div className='w-[10%] h-[99%] my-auto'>
                                <button className='px-4 py-1 h-8 bg-blue-500 text-base font-[400] text-white rounded-[4px] shadow-sm' id={q.query_id} onClick={(e) => {
                                    dispatch(setCQID(e.target.id))
                                }}> View </button>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Close;