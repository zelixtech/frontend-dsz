import { useState } from 'react'
import logo from '../image/DSZ_LOGO.png'
import { useDispatch } from 'react-redux';
import { setUser, setDept } from '../Reducer/userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {

    const dispach = useDispatch();
    const navigate = useNavigate();

    const message = {
        error: "Somthing Went Wrong...",
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

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "darshanSession=s%3AgIDiWuErG9DzIfFSZAA7vb3DJXrttbPk.qsQccDQ7Jit7ZIq3jyEDvZkSkIb0sYq%2FTUEvdrcWKuI");

        var raw = JSON.stringify({
            "data": {
                "email": LoginDetails.email,
                "password": LoginDetails.password
            }
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_HOST}/api/auth`, requestOptions)
            .then(response => response.text())
            .then((result) => {

                result = JSON.parse(result);
                result = result.result;

                if (result.error) {
                    setStatus("mismatch")
                } else {
                    dispach(setUser(result));
                    dispach(setDept(result.employee_department));

                    if (result.employee_department === "Employee") {
                        navigate('/employee');
                    } else if (result.employee_department === "hr") {
                        navigate('/hr');
                    }
                }

            })
            .catch(error => setStatus("error"));
    }

    return (
        <div className='flex justify-center items-center h-screen bg-bg'>

            <div className='w-[500px] shadow-md rounded-md bg-white py-10'>

                <img src={logo} alt="Darshan Safety Zone" className='mx-auto my-4 w-[380px]' />

                <div className='mt-10'>

                    <div className='flex flex-col mx-10 mb-5'>
                        <label className='text-base font-medium text-black pb-3'>Email</label>
                        <input type="Email" className='border-none outline-none bg-gray-100 rounded-sm shadow-sm px-2 py-[0.4rem]' value={LoginDetails.email} onChange={(e) => { HandelEmail(e) }} />
                    </div>
                    <div className='flex flex-col mx-10 mb-5'>
                        <label className='text-base font-medium text-black pb-3'>Password</label>
                        <input type="Password" className='border-none outline-none bg-gray-100 rounded-sm shadow-sm px-2 py-[0.4rem]' value={LoginDetails.password} onChange={(e) => { HandelPassword(e) }} />
                    </div>


                    <div className='flex flex-col mx-10 my-5 mt-10'>
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