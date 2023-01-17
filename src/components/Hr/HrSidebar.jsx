import { useState } from "react";
import {
  UserCircleIcon,
  Squares2X2Icon,
  CalendarDaysIcon,
  UserPlusIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import SidebarOption from "../SidebarOption";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function HrSidebar() {
  // const Active = true;
  const navigate = useNavigate();
  const [Panel, setPanel] = useState("Hr Panel");

  const Auth = useSelector((state) => state.user.auth);
  const User = useSelector((state) => state.user.user);

  const HandelPanelSelection = (e) => {
    var val = e.target.value;

    if (val === "Employee") {
      navigate("/employee");
      setPanel("Employee");
    }
    if (val === "Admin") {
      navigate("/admin");
      setPanel("Admin panel");
    }
    console.log(val);
  };

  return (
    <div className="basis-[17%]  h-screen">
      {/* Employee details */}

      <div className="p-2 m-2 mt-7 flex items-center justify-center">
        <div className="flex items-center">
          <div className="w-9 h-9 bg-indigo-100 outline outline-primary outline-2 rounded-md p-1 mx-1">
            <UserCircleIcon className="stroke-primary" />
          </div>
          <div className="mx-2">
            <h1 className="text-md font-medium">{User.employee_name}</h1>
            <p className="text-sm text-gray-400">
              {User.employee_office_email}
            </p>
          </div>
        </div>
      </div>

      <hr className="mx-auto my-2 w-[60%] bg-primary h-[2px]" />

      {Auth === "Admin" ? (
        <div className="mt-10 p-2 px-4">
          <div>
            <select
              id="panel"
              name="panel"
              className="bg-gray-50 w-full p-2.5 outline-none border-blue-500  focus:ring-blue-500 rounded-md text-sm focus:border-blue-500 block"
              onChange={(e) => {
                HandelPanelSelection(e);
              }}
              defaultValue={Panel}
            >
              <option value="Select Option" hidden selected>
                HR Panel
              </option>
              <option className="tetx-sm" value="Employee">
                Employee
              </option>
              <option className="tetx-sm" value="Admin">
                Admin Panel
              </option>
            </select>
          </div>
        </div>
      ) : null}

      <div className="mt-10">
        <SidebarOption
          link={"Staff"}
          Icon={Squares2X2Icon}
          Title={"DashBoard"}
        />
        <SidebarOption
          link={"Addmember"}
          Icon={UserPlusIcon}
          Title={"Add Member"}
        />
        <SidebarOption
          link={"Attendance"}
          Icon={CalendarDaysIcon}
          Title={"Attendance"}
        />
        <SidebarOption
          link={"settings"}
          Icon={Cog8ToothIcon}
          Title={"Settings"}
        />
      </div>
    </div>
  );
}

export default HrSidebar;
