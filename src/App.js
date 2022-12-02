import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Employee from './view/Employee';
import Hr from './view/Hr';
import Admin from './view/Admin';



function App() {
  return (

    <div>
      <Routes>
        <Route path="/Employee/*" element={<Employee />} />
        <Route path="/hr/*" element={<Hr />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes >
    </div>
  );
}

export default App;
