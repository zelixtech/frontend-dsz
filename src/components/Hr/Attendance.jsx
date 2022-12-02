import React from 'react';
import AttendanceDetails from './AttendanceDetails';
import AttendanceSidebar from './AttendanceSidebar';
import HrSearchbar from './HrSearchbar';

function Attendance({ HrInput, HrSearchHandler }) {
    return (
        <div className='basis-[83%] flex'>


            {/* main content  */}

            <div className='basis-[70%] bg-bg'>

                <HrSearchbar HrInput={HrInput} HrSearchHandler={HrSearchHandler} />

                {/* Staff  */}

                <div className='my-5 overflow-y-scroll h-screen'>
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={17} Halfleave={6} Leave={3} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={23} Halfleave={0} Leave={1} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={7} Halfleave={16} Leave={13} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={19} Halfleave={4} Leave={0} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={21} Halfleave={2} Leave={3} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={15} Halfleave={9} Leave={10} />
                    <AttendanceDetails Name={"shreeji sangani"} Position={"Sales Manager"} Attendance={17} Halfleave={6} Leave={3} />
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

export default Attendance