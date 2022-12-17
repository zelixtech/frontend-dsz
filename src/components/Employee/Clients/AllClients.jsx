import { useEffect, useState } from 'react'
import ClientDetails from '../ClientDetails';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fechClients } from '../../../Reducer/clientSlice';
import { setActiveClient } from '../../../Reducer/clientSlice';

function AllClients({ Status }) {

    // const [All_Clients, setAll_Clients] = useState([])
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(fechClients());
        // console.log("fatching data");

    }, [])


    const All_Clients = useSelector((state) => state.client.clients);


    // console.log(All_Clients);

    if (!All_Clients) {
        return "Loading Clients..."
    }

    var setBlocked = 0;

    // return null;

    return (

        <div className='my-5 overflow-y-scroll h-screen'>

            {

                All_Clients.map((c, index) => {

                    if (parseInt(c.client_blocked) === parseInt(Status)) {

                        if (Status === 1 && setBlocked === 0) {
                            dispatch(setActiveClient(c.client_id));
                            console.log("set blocked client id");
                            setBlocked = 1;
                        }

                        return (
                            < ClientDetails Username={c.client_name} Email={c.client_email} MobileNo={c.client_mobile} Company={c.client_industry} Status={"New"} key={index} ClientId={c.client_id} />
                        )
                    }

                })
            }



        </div>
    )
}

export default AllClients