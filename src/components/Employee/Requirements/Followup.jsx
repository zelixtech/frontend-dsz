import { useState } from 'react';
import axios from 'axios';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function Followup({ Date, Detail, FollowupId, setIsfollowup, FollowupNo, State }) {

    const [IsEdit, setIsEdit] = useState(false);
    const [Finput, setFinput] = useState(Detail);

    const HandelClick = (e) => {
        setIsEdit(true)
    }

    const handelInputChange = (e) => {
        setFinput(e.target.value);
    }

    const HandelSubmit = (e) => {

        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();

            var data = JSON.stringify({
                "data": {
                    "followup_text": Finput
                }
            });

            var config = {
                method: 'patch',
                url: `http://localhost:5000/api/followup/${FollowupId}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));

                    var resdata = response.data;

                    if (resdata.error) {



                        Store.addNotification({
                            title: "Error while Updating Follow Up",
                            message: resdata.errorMessage,
                            type: "warning",
                            insert: "top",
                            container: "top-right",
                            animationIn: ["animate__animated", "animate__fadeIn"],
                            animationOut: ["animate__animated", "animate__fadeOut"],
                            dismiss: {
                                duration: 5000,
                                onScreen: true
                            }
                        });

                    } else {

                        Store.addNotification({
                            title: `Follow Up ${FollowupNo} Updated Successfully`,
                            message: "Success",
                            type: "success",
                            insert: "top",
                            container: "top-right",
                            animationIn: ["animate__animated", "animate__fadeIn"],
                            animationOut: ["animate__animated", "animate__fadeOut"],
                            dismiss: {
                                duration: 5000,
                                onScreen: true
                            }
                        });
                        setIsEdit(false);
                        setIsfollowup(Math.random());
                    }

                })
                .catch(function (error) {
                    console.log(error);

                    Store.addNotification({
                        title: "Somting Went Wrong...",
                        message: "Server Side Error",
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
                });

        }


    }


    if (State === "Lost") {
        return (
            <div className='shadow-md p-3 mx-4 my-2 rounded-sm' onClick={() => { HandelClick() }}>

                <div className='flex justify-between'>
                    <p className='text-left  text-gray-400 text-sm'>#{FollowupNo}</p>
                    <p className='text-right text-gray-400 text-sm'>{Date}</p>
                </div>

                <p className='p-3 text-black'>{Detail}</p>


            </div>
        )
    }

    return (




        <div className='shadow-md p-3 mx-4 my-2 rounded-sm' onClick={() => { HandelClick() }}>

            <div className='flex justify-between'>
                <p className='text-left  text-gray-400 text-sm'>#{FollowupNo}</p>
                <p className='text-right text-gray-400 text-sm'>{Date}</p>
            </div>

            {
                IsEdit ? (<div>
                    <form onSubmit={(e) => { HandelSubmit(e) }}>
                        <textarea className="m-2 my-3 py-1 outline-none pl-2 text-sm bg-gray-50 w-[95%] shadow-sm rounded-sm" value={Finput} onChange={(e) => { handelInputChange(e) }} onKeyDown={(e) => { HandelSubmit(e) }} ></textarea>
                    </form>
                </div>) : <p className='p-3 text-black'>{Detail}</p>
            }

        </div>
    )
}

export default Followup