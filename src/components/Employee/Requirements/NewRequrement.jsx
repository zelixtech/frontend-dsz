import { useEffect, useState } from 'react'
import ClientRequest from '../ClientRequest';
import { fechUnAssignQuery } from '../../../Reducer/querySclice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function NewRequrement({ SearchInput, SortType }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fechUnAssignQuery());
    }, [])



    var UAQuery = useSelector((state) => state.query.UnassignQuery);

    if (SearchInput) {
        UAQuery = UAQuery.filter(({ query_subject }) => query_subject && query_subject.toLowerCase().includes(SearchInput.toLowerCase()))
    }

    // console.log(SortType);

    if (SortType) {

        if (SortType === "A-Z") {

            UAQuery = UAQuery.sort(function (a, b) {
                const nameA = a.query_subject.toUpperCase();
                const nameB = b.query_subject.toUpperCase();
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });

        } else if (SortType === "N-O") {

            UAQuery = UAQuery.slice().sort((x, y) => {
                x = new Date(x.createdAt);
                y = new Date(y.createdAt);
                return y - x;
            });

        } else if (SortType === "O-N") {

            UAQuery = UAQuery.filter(({ query_source }) => query_source && query_source === "tradeindia")

        } else if (SortType === "TII") {

            UAQuery = UAQuery.filter(({ query_source }) => query_source && query_source === "tradeindia")

        } else if (SortType === "CST") {
            UAQuery = UAQuery.filter(({ query_source }) => query_source && query_source !== "tradeindia")
        }
    }



    if (!UAQuery || UAQuery.length === 0) {
        return "Loading Requrements...";
    }

    // console.log(UAQuery);

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