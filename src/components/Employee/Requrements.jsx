import { useEffect } from 'react';
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "../TabSelector";
import ClientQuery from './Requirements/Query';
import NewRightsidebar from './Requirements/NewRightsidebar';
import RunningSidebar from "./Requirements/RunningSidebar";
import LostSidebar from "./Requirements/LostSidebar";
import SearchBar from "./SearchBar";
import { useSelector } from 'react-redux';

import Chat from '../Popups/Chat'
import { usePopups } from '../../components/PopupsContext'
import GenerateQoutation from "../Popups/GenerateQoutation";
import CloseSidebar from "./Requirements/CloseSidebar";
import NewRequrement from './Requirements/NewRequrement';
import Running from './Requirements/Running';
import Lost from './Requirements/Lost';
import Close from './Requirements/Close';



function Requrements({ Input, searchHandler }) {

    const [selectedTab, setSelectedTab] = useTabs([
        "New",
        "Running",
        "Lost",
        "Close",
    ]);

    const { chat, qoutation } = usePopups();
    const [ChatPopup, SetChatPopup] = chat;
    const [NewQoutation, SetNewQoutation] = qoutation;
    const SearchInput = useSelector((state) => state.filters.Input);
    const SortType = useSelector((state) => state.filters.SortType);
    const EmployeeId = useSelector((state) => state.user.employeeId);

    // console.log(EmployeeId)


    return (
        <div className='basis-[83%] flex'>

            {/* main content  */}

            <div className='basis-[70%] bg-bg'>

                <nav className="flex ml-3 my-4">
                    <TabSelector
                        isActive={selectedTab === "New"}
                        onClick={() => setSelectedTab("New")}
                    >
                        New
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === "Running"}
                        onClick={() => setSelectedTab("Running")}
                    >
                        Running
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === "Lost"}
                        onClick={() => setSelectedTab("Lost")}
                    >
                        Lost
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === "Close"}
                        onClick={() => setSelectedTab("Close")}
                    >
                        Done
                    </TabSelector>
                </nav>

                <SearchBar Input={Input} searchHandler={searchHandler} />

                {/* requests  */}

                <div>
                    <TabPanel hidden={selectedTab !== "New"}><NewRequrement SearchInput={SearchInput} SortType={SortType} EmployeeId={EmployeeId} /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Running"}><Running SearchInput={SearchInput} SortType={SortType} EmployeeId={EmployeeId} /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Lost"}><Lost SearchInput={SearchInput} SortType={SortType} EmployeeId={EmployeeId} /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Close"}><Close SearchInput={SearchInput} SortType={SortType} EmployeeId={EmployeeId} /></TabPanel>
                </div>

            </div>



            {/* Rightsidebar  */}

            <div className='basis-[30%] overflow-y-scroll h-screen'>

                <div>
                    <TabPanel hidden={selectedTab !== "New"}><NewRightsidebar /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Running"}><RunningSidebar EmployeeId={EmployeeId} /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Lost"}><LostSidebar EmployeeId={EmployeeId} /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Close"}><CloseSidebar EmployeeId={EmployeeId} /></TabPanel>
                </div>

                <Chat visible={ChatPopup} close={SetChatPopup} />
                <GenerateQoutation visible={NewQoutation} close={SetNewQoutation} />


            </div>

        </div>
    )
}

export default Requrements