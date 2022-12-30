import { useEffect } from 'react';
import AttendanceDetails from './AttendanceDetails';
import AttendanceSidebar from './AttendanceSidebar';
import HrSearchbar from './HrSearchbar';
import { useDispatch, useSelector } from 'react-redux';
import { fechEmployeesAttendance, setEmployeeAttendanceID } from '../../Reducer/employeeSlice';

function Attendance({ HrInput, HrSearchHandler }) {


    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const SearchInput = useSelector((state) => state.filters.HrInput);
    const SortType = useSelector((state) => state.filters.HrSortType);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fechEmployeesAttendance({ mm, yyyy }))

    }, [])

    var employeeAttendance = useSelector((state) => state.employee.employeesAttendance);

    if (SearchInput) {
        employeeAttendance = employeeAttendance.filter(({ employee_name }) => employee_name && employee_name.toLowerCase().includes(SearchInput.toLowerCase()))
        dispatch(setEmployeeAttendanceID(employeeAttendance[0].employee_id));
    }

    if (SortType && employeeAttendance) {

        if (SortType === "A-Z") {

            employeeAttendance = employeeAttendance.slice().sort(function (a, b) {
                const nameA = a.employee_name.toUpperCase();
                const nameB = b.employee_name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
                // console.log(a.employee_name, b.employee_name)
            });

            dispatch(setEmployeeAttendanceID(employeeAttendance[0].employee_id));

        } else if (SortType === "Z-A") {

            employeeAttendance = employeeAttendance.slice().sort(function (a, b) {
                const nameA = a.employee_name.toUpperCase();
                const nameB = b.employee_name.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
                // console.log(a.employee_name, b.employee_name)
            });

            dispatch(setEmployeeAttendanceID(employeeAttendance[0].employee_id));

        } else if (SortType === "N-O") {

            employeeAttendance = employeeAttendance.slice().sort((x, y) => {
                x = new Date(x.createdAt);
                y = new Date(y.createdAt);
                return y - x;
            });

            dispatch(setEmployeeAttendanceID(employeeAttendance[0].employee_id));

        } else if (SortType === "O-N") {

            employeeAttendance = employeeAttendance.slice().sort((x, y) => {
                x = new Date(x.createdAt);
                y = new Date(y.createdAt);
                return x - y;
            });

            dispatch(setEmployeeAttendanceID(employeeAttendance[0].employee_id));
        }

    }

    return (
        <div className='basis-[83%] flex'>

            {/* main content  */}

            <div className='basis-[70%] bg-bg'>

                <HrSearchbar HrInput={HrInput} HrSearchHandler={HrSearchHandler} />

                {/* Staff  */}

                <div className='my-5 overflow-y-scroll h-screen'>


                    {
                        !employeeAttendance ? <div className='fex justify-center items-center text-blue-500 pt-20'>Loading Employees Attendance...</div> :

                            employeeAttendance.map((e, index) => {
                                return (
                                    <AttendanceDetails Name={e.employee_name} Position={e.employee_designation} Attendance={e.attendance_stats.full} Halfleave={e.attendance_stats.half} Leave={e.attendance_stats.leave} key={index} EmployeeId={e.employee_id} />
                                )
                            })

                    }

                    {/* <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={17} Halfleave={6} Leave={3} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={23} Halfleave={0} Leave={1} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={7} Halfleave={16} Leave={13} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={19} Halfleave={4} Leave={0} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={21} Halfleave={2} Leave={3} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={15} Halfleave={9} Leave={10} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={17} Halfleave={6} Leave={3} /> */}
                </div>

            </div>



            {/* Rightsidebar  */}

            <div className='basis-[30%] overflow-y-scroll h-screen'>

                <div>
                    <AttendanceSidebar />
                </div>

            </div>

        </div>
    )
}

export default Attendance;