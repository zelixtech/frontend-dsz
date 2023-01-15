import { useState } from 'react'
import logo from '../image/DSZ_LOGO.png'
import { useDispatch } from 'react-redux';
import { setUser, setDept, setAuth } from '../Reducer/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setEmployeeId } from '../Reducer/userSlice';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

function Login() {

    const dispach = useDispatch();
    const navigate = useNavigate();

    const message = {
        error: "Something Went Wrong...",
        mismatch: "Wrong Email Or Password",
    }

    const [status, setStatus] = useState("");

    const [LoginDetails, SetLoginDetails] = useState({ email: "", password: "" });

    const HandelEmail = (e) => {
        var email = e.target.value;
        var PreDetails = { ...LoginDetails };
        PreDetails["email"] = email;
        SetLoginDetails(PreDetails);
    }

    const HandelPassword = (e) => {
        var password = e.target.value;
        var PreDetails = { ...LoginDetails };
        PreDetails["password"] = password;
        SetLoginDetails(PreDetails);
    }

    const HandelSubmmit = () => {

        // const jar = new CookieJar();
        // const client = wrapper(axios.create({ jar }));

        if (window.matchMedia("(max-width: 600px)")) {
            // console.log("hiii");
            document.documentElement.requestFullscreen();
        }

        dispach(setAuth("Admin"));
        navigate('/admin')

        // var data = JSON.stringify({
        //     "data": {
        //         "email": LoginDetails.email,
        //         "password": LoginDetails.password
        //     }
        // });

        // var config = {
        //     method: 'post',
        //     url: `${process.env.REACT_APP_HOST}/api/auth`,
        //     // withCredentials: true,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data));

        //         console.log(response.headers)

        //         var result = response.data;

        //         if (result.error) {
        //             setStatus("mismatch")
        //         } else {

        //             result = result.data;
        //             dispach(setUser(result));
        //             dispach(setDept(result.employee_department));
        //             dispach(setEmployeeId(result.employee_id));

        //             if (result.employee_isAdmin === 1) {
        //                 dispach(setAuth("Admin"));
        //             } else if (result.employee_isHR === 1) {
        //                 dispach(setAuth("Hr"));
        //             } else {
        //                 dispach(setAuth("Employee"));
        //             }

        //             if (result.employee_isAdmin === 1) {
        //                 navigate('/admin')
        //             }
        //             else if (result.employee_department === "Employee") {
        //                 navigate('/employee');
        //             } else if (result.employee_department === "hr") {
        //                 navigate('/hr');
        //             }
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    return (
        <div className='flex justify-center items-center h-screen bg-bg'>

            <div className='w-[90%] py-5  md:w-[500px] shadow-md rounded-md bg-white md:py-10'>

                <img src={logo} alt="Darshan Safety Zone" className='w-[280px] mx-5 my-2 md:w-[380px] md:mx-auto md:my-4' />

                <div className='mt-7 md:mt-10'>

                    <div className='flex flex-col mx-5 md:mx-10 mb-5'>
                        <label className='text-base font-medium text-black pb-3'>Email</label>
                        <input type="Email" className='border-none outline-none bg-gray-100 rounded-sm shadow-sm px-2 py-[0.4rem]' value={LoginDetails.email} onChange={(e) => { HandelEmail(e) }} />
                    </div>
                    <div className='flex flex-col mx-5 md:mx-10 mb-5'>
                        <label className='text-base font-medium text-black pb-3'>Password</label>
                        <input type="Password" className='border-none outline-none bg-gray-100 rounded-sm shadow-sm px-2 py-[0.4rem]' value={LoginDetails.password} onChange={(e) => { HandelPassword(e) }} />
                    </div>


                    <div className='flex flex-col mx-5 md:mx-10 my-5 mt-10'>
                        <button className='px-4 py-2 bg-green-500 text-white rounded-sm' onClick={() => { HandelSubmmit() }}>Login</button>
                    </div>

                    {
                        status && <p className='text-orange-500 text-center font-medium'>{message[status]}</p>
                    }

                </div>
            </div>

        </div>
    )
}

export default Login