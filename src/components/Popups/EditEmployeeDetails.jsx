import React from 'react'
import {
    XCircleIcon
} from '@heroicons/react/24/outline'

function EditEmployeeDetails({ visible, close }) {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">

            <div className='w-[1000px] h-[85%] overflow-y-scroll bg-bg rounded-md'>


                <div className='sticky top-0 backdrop-blur-sm bg-bg bg-opacity-20'>
                    <div className='flex justify-between px-20 pt-5 pb-2'>
                        <h1 className='heading'>Edit Employee Details</h1>
                        <XCircleIcon onClick={() => close(false)} className="w-8" />
                    </div>
                </div>

                <div className='px-28 pb-20 w-[950px]'>

                    <form>

                        <div className='flex flex-col'>
                            <label className='label'>Name</label>
                            <input className='NewEmployeeinput' type="text" name="employee_name" />
                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Mobile No</label>
                            <input className='NewEmployeeinput' type="text" name="employee_name" />
                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Office Mail</label>
                            <input className='NewEmployeeinput' type="email" name="employee_name" />
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>Email</label>
                            <input className='NewEmployeeinput' type="email" name="employee_name" />
                        </div>

                        <div className='flex justify-between pt-3 pb-2'>

                            <div className='flex flex-col'>
                                <label className='label'>Designation</label>
                                {/* <input className='NewEmployeeinput' type="text" name="employee_name" /> */}
                                <select id="designation" name="designation" className='NewEmployeeinput  w-[300px]'>
                                    <option value="Managing Director">Managing Director</option>
                                    <option value="Sales Manager">Sales Manager</option>
                                    <option value="Sales Executive">Sales Executive</option>
                                    <option value="Account Executive">Account Executive</option>
                                    <option value="Sales Field">Sales Field</option>
                                    <option value="Hr">Hr</option>
                                    <option value="Hr-Admin">Hr-Admin</option>
                                    <option value="Back office ">Back office </option>
                                    <option value="Sales/Field Executive">Sales/Field Executive</option>
                                </select>
                            </div>


                            <div className='flex flex-col'>
                                <label className='label'>Date of Birth</label>
                                <input className='NewEmployeeinput w-[300px]' type="date" name="employee_name" />
                            </div>

                        </div>



                        <div className='flex justify-between py-3'>

                            <div className='flex flex-col'>
                                <label className='label'>Joining Date</label>
                                <input className='NewEmployeeinput w-[300px]' type="date" name="employee_name" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='label'>Relieve Date</label>
                                <input className='NewEmployeeinput w-[300px]' type="date" name="employee_name" />
                            </div>

                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Resident Address</label>
                            <textarea className='NewEmployeeinput h-[100px]' type="text" name="employee_name" ></textarea>
                        </div>

                        <div>
                            <button className='py-2 px-6 mt-10 bg-blue-500 text-white font-medium rounded-md shadow-sm '>Save</button>
                        </div>

                        <h1 className='headline text-[18px] pt-9 pb-4'>Bank Details</h1>

                        <div className='flex flex-col'>
                            <label className='label'>Name (given in bank)</label>
                            <input className='NewEmployeeinput' type="text" name="employee_name" />
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>Bank Name</label>
                            <input className='NewEmployeeinput' type="text" name="employee_name" />
                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Branch Name</label>
                            <input className='NewEmployeeinput' type="text" name="employee_name" />
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>ISFC Code</label>
                            <input className='NewEmployeeinput' type="text" name="employee_name" />
                        </div>

                        <div>
                            <button className='py-2 px-6 mt-10 bg-blue-500 text-white font-medium rounded-md shadow-sm '>Save</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default EditEmployeeDetails;