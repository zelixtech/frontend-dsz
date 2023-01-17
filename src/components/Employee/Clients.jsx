import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "../TabSelector";
import AllClients from "./Clients/AllClients";
import BlockedClientsSidebar from "./Clients/BlockedClientsSidebar";
import ActiveClientSidebar from "./Clients/ActiveClientSidebar";
import ClientSerachbar from "./Clients/ClientSerachbar";
import { useSelector } from "react-redux";

function Users({ Input, searchHandler }) {
  const [selectedTab, setSelectedTab] = useTabs(["Active", "Blocked"]);

  const SearchInput = useSelector((state) => state.filters.CInput);
  const SortType = useSelector((state) => state.filters.CSortType);

  return (
    <div className="basis-[83%] flex">
      {/* main content  */}

      <div className="basis-[70%] bg-bg">
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

        {/* <SearchBar  /> */}
        <ClientSerachbar Input={Input} searchHandler={searchHandler} />

        {/* requests  */}

        <div>
          <TabPanel hidden={selectedTab !== "Active"}>
            <AllClients
              SearchInput={SearchInput}
              SortType={SortType}
              Status={0}
            />
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Blocked"}>
            <AllClients
              SearchInput={SearchInput}
              SortType={SortType}
              Status={1}
            />
          </TabPanel>
        </div>
      </div>

      {/* Rightsidebar  */}

      <div className="basis-[30%] boxs">
        <div>
          <TabPanel hidden={selectedTab !== "Active"}>
            <ActiveClientSidebar />
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Blocked"}>
            <BlockedClientsSidebar />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default Users;
