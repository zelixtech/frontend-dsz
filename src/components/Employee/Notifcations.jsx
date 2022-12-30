import { useEffect, useState } from 'react'
import axios from 'axios'

function Notifcations() {


    const [NData, setNData] = useState([])


    useEffect(() => {

        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_HOST}/api/query/all/created_unassigned`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                var resdata = response.data;

                if (resdata.error) {

                } else {
                    setNData(resdata.data);
                    console.log(resdata.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <div className='w-[100%] bg-bg'>
            <h1 className='pt-14 pl-10 text-lg'>Notifcations</h1>

            <p className='pl-10 py-5 mt-6'>Following Inquiry is pending from 15 Days</p>

            <div className='pl-5 mt-2 w-[90%]'>

                {
                    !NData ? "No Notification" :
                        NData.map((q, index) => {
                            return (
                                <div className='px-4 py-2 mx-4 my-2 flex justify-between bg-white shadow-md  rounded-md' key={index}>
                                    <div className='w-[3%] pr-1'>
                                        <p className='text-blue-400'>{index + 1}</p>
                                    </div>
                                    <div className='w-[70%] pr-1'>
                                        <h1 className='text-base font-400'>
                                            {q.query_subject}
                                        </h1>
                                        <p className='text-gray-400'>{q.query_product}</p>
                                    </div>
                                    <div className='flex flex-col w-[25%]'>
                                        <p className='text-base'>Inquiry Date</p>
                                        <p className='text-red-400 font-400 text-sm'>{q.createdAt.split("T")[0]}</p>
                                    </div>
                                    <div className='w-[10%] h-[99%] my-auto'>
                                        <button className='px-4 py-1 h-8 bg-blue-500 text-base font-[400] text-white rounded-[4px] shadow-sm' id={q.query_id} onClick={(e) => { }}> View </button>
                                    </div>

                                </div>
                            )
                        })
                }


            </div>

        </div>
    )
}

export default Notifcations