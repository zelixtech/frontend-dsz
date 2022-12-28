import { useEffect, useState } from 'react'
import ClientDetails from '../ClientDetails';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fechActiveClients } from '../../../Reducer/clientSlice';
import { fechBlockClients } from '../../../Reducer/clientSlice';


function AllClients({ Status }) {

    // const [All_Clients, setAll_Clients] = useState([])
    const dispatch = useDispatch();


    useEffect(() => {


        dispatch(fechActiveClients());
        dispatch(fechBlockClients());

        // console.log("fatching data");

    }, [])


    const All_Active_Clients = useSelector((state) => state.client.Activeclients);
    const All_Block_Clients = useSelector((state) => state.client.Blockclients);
    var All_Clients = undefined;

    if (Status === 0) {
        All_Clients = All_Active_Clients;
    } else {
        All_Clients = All_Block_Clients;
    }

    // console.log(All_Clients);

    if (!All_Clients) {
        return <div className='flex justify-center items-center mt-20 text-blue-500'>Loading Clients...</div>
    }

    // return null;

    return (

        <div className='my-5 overflow-y-scroll h-screen'>

            {

                All_Clients.map((c, index) => {

                    return (
                        < ClientDetails Username={c.client_name} Email={c.client_email} MobileNo={c.client_mobile} Company={c.client_industry} Status={"New"} IsActive={Status} key={index} ClientId={c.client_id} />
                    )


                })
            }



        </div>
    )
}

export default AllClients