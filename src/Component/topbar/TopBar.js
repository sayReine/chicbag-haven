import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./topbar.css"
import Home from "../pages/home/Home"; // Import your components for routes here
import Settings from "../pages/settings/Settings";
import Login from "../pages/login/Login";
import Write from "../pages/write/Write";


export default function TopBar() {
  return (
   <div className="top">
    <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
    </div>
    <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"> <NavLink to="/home"> HOME</NavLink>
              </li>
            <li className="topListItem">
              <NavLink to="/write"> WRITE</NavLink></li>
            <li className="topListItem">
              <NavLink to="/settings">SETTINGS</NavLink> </li>
            <li className="topListItem"><NavLink to="login">LOGIN</NavLink> </li>
          </ul>
          </div>
      <div className="topRight">
        <section className="topImg"></section>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        
      </div>
      </div>
    // <Routes>
    //  <TopBar />
    //   <Route path="/" exact component={Home} />
    //   <Route path="/settings" component={Settings} />
    //   <Route path="/login" component={Login} />
    //   <Route path="/write" component={Write} />
    //   {/* Add more routes as needed */}
    //  </Routes>

  );
}



