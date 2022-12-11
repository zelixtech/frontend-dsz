import { useState, useEffect } from 'react'
import HrSearchbar from './HrSearchbar'
import StaffDetails from './StaffDetails'
import StaffSidebar from './StaffSidebar'
import axios from 'axios'


function Staff({ HrInput, HrSearchHandler }) {

    const [Employee, setEmployee] = useState([]);
    const [EmployeeId, setEmployeeId] = useState();

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://184.72.65.91:3000/api/employee/all',
            headers: {
                'Cookie': 'darshanSession=s%3AgIDiWuErG9DzIfFSZAA7vb3DJXrttbPk.qsQccDQ7Jit7ZIq3jyEDvZkSkIb0sYq%2FTUEvdrcWKuI'
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                var resData = response.data;
                setEmployee(resData.data);
                console.log(Employee);
                setEmployeeId(resData.data[0].employee_id)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const HandelView = (e) => {
        var id = e.target.id;
        setEmployeeId(id);
    }



    return (
        <div className='basis-[83%] flex'>

            {/* main content  */}

            <div className='basis-[70%] bg-bg'>

                <HrSearchbar HrInput={HrInput} HrSearchHandler={HrSearchHandler} />

                {/* Staff  */}

                <div className='my-5 overflow-y-scroll h-screen'>


                    {
                        Employee.map((e, index) => {
                            //console.log(e);
                            return (
                                <StaffDetails Name={e.employee_name} Position={e.employee_designation} Contact={e.employee_mobile} Email={e.employee_email} key={e.employee_id} EmployeeId={e.employee_id} HandelView={HandelView} />
                            )
                        })

                    }


                    {/* <StaffDetails Name={"vs leitan"} Position={"Product Manager"} Contact={"+91 9510705040"} Email={"vsleitan@gmail.com"} />
                    <StaffDetails Name={"vs leitan"} Position={"Product Manager"} Contact={"+91 9510705040"} Email={"vsleitan@gmail.com"} />
                    <StaffDetails Name={"Shreeji sangani"} Position={"Manager"} Contact={"+91 9510705040"} Email={"Shreejisangani@gmail.com"} />
                    <StaffDetails Name={"Shreeji sangani"} Position={"Manager"} Contact={"+91 9510705040"} Email={"Shreejisangani@gmail.com"} />
                    <StaffDetails Name={"vs leitan"} Position={"Product Manager"} Contact={"+91 9510705040"} Email={"vsleitan@gmail.com"} />
                    <StaffDetails Name={"vs leitan"} Position={"Product Manager"} Contact={"+91 9510705040"} Email={"vsleitan@gmail.com"} />
                    <StaffDetails Name={"Shreeji sangani"} Position={"Manager"} Contact={"+91 9510705040"} Email={"Shreejisangani@gmail.com"} /> */}


                </div>

            </div>



            {/* Rightsidebar  */}


            {
                EmployeeId && (
                    <div className='basis-[30%] overflow-y-scroll h-screen'>

                        <div>
                            <StaffSidebar Data={Employee[EmployeeId - 1]} EmployeeId={EmployeeId} />
                        </div>

                    </div>
                )
            }



        </div>
    )
}

export default Staff