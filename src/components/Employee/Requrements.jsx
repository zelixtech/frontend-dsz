// import { useEffect } from 'react';
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "../TabSelector";
import ClientQuery from './Requirements/Query';
import NewRightsidebar from './Requirements/NewRightsidebar';
import RunningSidebar from "./Requirements/RunningSidebar";
import DoneSidebar from "./Requirements/DoneSidebar";
import SearchBar from "./SearchBar";


import Chat from '../Popups/Chat'
import { usePopups } from '../../components/PopupsContext'
import GenerateQoutation from "../Popups/GenerateQoutation";


function Requrements({ Input, searchHandler }) {

    const [selectedTab, setSelectedTab] = useTabs([
        "New",
        "Running",
        "Done",
        "Close",
    ]);

    const { chat, qoutation } = usePopups();
    const [ChatPopup, SetChatPopup] = chat;
    const [NewQoutation, SetNewQoutation] = qoutation;

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
                        isActive={selectedTab === "Done"}
                        onClick={() => setSelectedTab("Done")}
                    >
                        Done
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === "Close"}
                        onClick={() => setSelectedTab("Close")}
                    >
                        Close
                    </TabSelector>
                </nav>

                <SearchBar Input={Input} searchHandler={searchHandler} />

                {/* requests  */}

                <div>
                    <TabPanel hidden={selectedTab !== "New"}><ClientQuery Status={"New"} /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Running"}><ClientQuery Status={"Rinning"} /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Done"}><ClientQuery Status={"Done"} /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Close"}><ClientQuery Status={"Close"} /></TabPanel>
                </div>

            </div>



            {/* Rightsidebar  */}

            <div className='basis-[30%] overflow-y-scroll h-screen'>

                <div>
                    <TabPanel hidden={selectedTab !== "New"}><NewRightsidebar /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Running"}><RunningSidebar /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Done"}><DoneSidebar /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Close"}>Billing</TabPanel>
                </div>

                <Chat visible={ChatPopup} close={SetChatPopup} />
                <GenerateQoutation visible={NewQoutation} close={SetNewQoutation} />


            </div>

        </div>
    )
}

export default Requrements