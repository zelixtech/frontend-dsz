import { useEffect } from 'react'
import ClientRequest from '../ClientRequest';
import { fechAssignQuery } from '../../../Reducer/querySclice';
import { setAQID } from '../../../Reducer/querySclice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function Running({ SearchInput, SortType }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fechAssignQuery());
    }, [])


    var AQuery = useSelector((state) => state.query.AssignQuery);

    if (SearchInput) {
        AQuery = AQuery.filter(({ query_subject }) => query_subject && query_subject.toLowerCase().includes(SearchInput.toLowerCase()))
    }

    if (SortType) {

        if (SortType === "A-Z") {

            AQuery = AQuery.slice().sort(function (a, b) {
                const nameA = a.query_subject.toUpperCase();
                const nameB = b.query_subject.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
                // console.log(a.query_subject, b.query_subject)
            });

        } else if (SortType === "N-O") {

            AQuery = AQuery.slice().sort((x, y) => {
                x = new Date(x.createdAt);
                y = new Date(y.createdAt);
                return y - x;
            });

        } else if (SortType === "O-N") {

            AQuery = AQuery.slice().sort((x, y) => {
                x = new Date(x.createdAt);
                y = new Date(y.createdAt);
                return x - y;
            });

        } else if (SortType === "TII") {

            AQuery = AQuery.filter(({ query_source }) => query_source && query_source === "tradeindia")

        } else if (SortType === "CST") {
            AQuery = AQuery.filter(({ query_source }) => query_source && query_source !== "tradeindia")
        }
    }

    if ((SearchInput || SortType) && (!AQuery || AQuery.length === 0)) {
        return <div className='flex justify-center items-center pt-20 text-blue-500'>No requrements with matching filter...</div>;
    }

    if (!AQuery) {
        return <div className='flex justify-center items-center pt-20 text-blue-500'>Loading Requrements...</div>;
    }

    console.log(AQuery);

    return (
        <div className='my-5 overflow-y-scroll h-screen'>

            {
                AQuery.map((q, index) => {
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
                                    dispatch(setAQID(e.target.id))
                                }}> View </button>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Running;