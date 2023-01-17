import React from "react";
import Sidebar from "../components/Employee/Sidebar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Settings from "../components/Employee/Settings";
import GenerateInvoice from "../components/Employee/GenerateInvoice";
import Notifcations from "../components/Employee/Notifcations";
import Clients from "../components/Employee/Clients";
import Requrements from "../components/Employee/Requrements";

import { PopupProvider } from "../components/PopupsContext";

function Employee() {
  const [Input, setInput] = useState(true);

  const searchHandler = () => {
    setInput(!Input);
    // console.log(Input)
  };

  return (
    <PopupProvider>
      <div className="flex">
        <Sidebar />

        <Routes>
          <Route
            path="/clients"
            element={<Clients Input={Input} searchHandler={searchHandler} />}
          />
          <Route
            path="/requirements"
            element={
              <Requrements Input={Input} searchHandler={searchHandler} />
            }
          />
          <Route
            path="/"
            element={
              <Requrements Input={Input} searchHandler={searchHandler} />
            }
          />
          <Route path="/notification" element={<Notifcations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/invoice" element={<GenerateInvoice />} />
        </Routes>
      </div>
    </PopupProvider>
  );
}

export default Employee;
