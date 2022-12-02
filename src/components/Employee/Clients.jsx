import React from 'react'
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "../TabSelector";
import SearchBar from './SearchBar';
import AllClients from './Clients/AllClients';
import BlockedClientsSidebar from './Clients/BlockedClientsSidebar';
import ActiveClientSidebar from './Clients/ActiveClientSidebar';



function Users({ Input, searchHandler }) {


    const [selectedTab, setSelectedTab] = useTabs([
        "Active",
        "Blocked",
    ]);

    return (

        <div className='basis-[83%] flex'>

            {/* main content  */}

            <div className='basis-[70%] bg-bg'>

                <nav className="flex ml-3 my-4">
                    <TabSelector
                        isActive={selectedTab === "Active"}
                        onClick={() => setSelectedTab("Active")}
                    >
                        Active
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === "Blocked"}
                        onClick={() => setSelectedTab("Blocked")}
                    >
                        Blocked
                    </TabSelector>
                </nav>


                <SearchBar Input={Input} searchHandler={searchHandler} />

                {/* requests  */}

                <div>
                    <TabPanel hidden={selectedTab !== "Active"}><AllClients /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Blocked"}><AllClients /></TabPanel>

                </div>



            </div>



            {/* Rightsidebar  */}

            <div className='basis-[30%] boxs'>

                <div>
                    <TabPanel hidden={selectedTab !== "Active"}><ActiveClientSidebar /></TabPanel>
                    <TabPanel hidden={selectedTab !== "Blocked"}><BlockedClientsSidebar /></TabPanel>
                </div>

            </div>

        </div>
    )
}

export default Users