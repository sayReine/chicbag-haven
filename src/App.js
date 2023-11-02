import React from "react";
import TopBar from "./Component/topbar/TopBar";
import Register from "./Component/pages/register/Register";
import Settings from "./Component/pages/settings/Settings";
import Login from "./Component/pages/login/Login";
import Home from "./Component/pages/home/Home";
import Single from "./Component/pages/single/Single";
import Write from "./Component/pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // const user = true;
  return (
      <Router> 
         <TopBar />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
            <Route path="single" element={<Single />} />
        </Routes>
      </Router> 
  );
}

export default App;

