import React, { useState, useContext } from "react";

const PopupContext = React.createContext();

export const usePopups = () => {
    return useContext(PopupContext);
}

export function PopupProvider({ children }) {

    const [ChatPopup, SetChatPopup] = useState(false);
    const [NewRequest, SetNewRequest] = useState(false);
    const [NewQoutation, SetNewQoutation] = useState(false);
    const [NewClient, SetNewClient] = useState(false);
    const [EditStaffDetails, SetEditStaffDetails] = useState(false);

    return (
        <PopupContext.Provider value={{ chat: [ChatPopup, SetChatPopup], newreq: [NewRequest, SetNewRequest], qoutation: [NewQoutation, SetNewQoutation], client: [NewClient, SetNewClient], employee: [EditStaffDetails, SetEditStaffDetails], }} >
            {children}
        </PopupContext.Provider>
    )
}