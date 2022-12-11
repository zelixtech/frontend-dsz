import {
  Routes,
  Route,
} from "react-router-dom";


import Employee from './view/Employee';
import Hr from './view/Hr';
import Admin from './view/Admin';
import Login from './view/Login';

import { useSelector } from 'react-redux';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {

  const UserDetails = useSelector((state) => state.user);

  // const User = UserDetails.user;
  const User = true;

  return (

    <div>
      <ReactNotifications />
      <>
        {
          !User ? <Login /> : (<div>
            <Routes>
              <Route path="/employee/*" element={<Employee />} />
              <Route path="/hr/*" element={<Hr />} />
              <Route path="/admin" element={<Admin />} />
            </Routes >
          </div>)

        }

      </>
    </div>
  );
}

export default App;
