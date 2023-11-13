import React from "react";
import TopBar from "./Component/topbar/TopBar";
import Register from "./Component/pages/register/Register";
import Settings from "./Component/pages/settings/Settings";
import Login from "./Component/pages/login/Login";
import Home from "./Component/pages/home/Home";
import Single from "./Component/pages/single/Single";
import Write from "./Component/pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SinglePost from "./Component/singlePost/SinglePost";

function App() {
  const user = true;
  return (
      <Router> 
         <TopBar />
        
        <Routes>
          <Route path="/" element={user ? <Home/> : <Register />}/>
          <Route path="/write" element={user ? <Write/> : <Register />} />
           <Route path="/singlepost" element={<SinglePost/>}/>
          <Route path="/login" element={user ? < Login/> : <Home />} />
            <Route path="/register" element={<Register/>}/>
           
          <Route path="/settings" element={user ? <Settings/> : <Register />} />
            <Route path="/post/:postid" element={<Single />} />

          
        </Routes>
      </Router> 
  );
}
 
export default App;

