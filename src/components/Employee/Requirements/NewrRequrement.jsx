import { useEffect } from 'react'
import ClientRequest from '../ClientRequest';
import { fechUnAssignQuery } from '../../../Reducer/querySclice';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function NewRequrement() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fechUnAssignQuery());
    }, [])


    const UAQuery = useSelector((state) => state.query.UnassignQuery);

    if (!UAQuery) {
        return "Loading Requrements...";
    }

    console.log(UAQuery);

    return (
        <div className='my-5 overflow-y-scroll h-screen'>


            {
                UAQuery.map((q, index) => {
                    return (
                        < ClientRequest request={q.query_subject} requestCatagory={q.query_product} date={q.createdAt.split("T")[0]} Status={"New"} Lastseen={q.updatedAt.split("T")[0]} key={index} QueryId={q.query_id} />
                    )
                })
            }

        </div>
    )
}

export default NewRequrement;