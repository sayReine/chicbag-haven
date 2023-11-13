import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./topbar.css"
import Home from "../pages/home/Home"; // Import your components for routes here
import Settings from "../pages/settings/Settings";
import Login from "../pages/login/Login";
import Write from "../pages/write/Write";


export default function TopBar() {
  const user = true;
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
            <li className="topListItem"> <NavLink to="/" style={{textDecoration:"none",color:"inherit"}}> HOME</NavLink>
              </li>
            <li className="topListItem">
              <NavLink to="/write" style={{textDecoration:"none",color:"inherit"}}> WRITE</NavLink></li>
            <li className="topListItem">
              <NavLink to="/settings" style={{textDecoration:"none",color:"inherit"}}>SETTINGS</NavLink> </li>
            <li className="topListItem"><NavLink to="login" style={{textDecoration:"none",color:"inherit"}} >
              {user && "LOGOUT"}</NavLink> </li>
          </ul>
          </div>
      <div className="topRight">
        {
          user ? (
             <section className="topImg"></section>
          ) : (
            <ul className="topList">
              <li className="topListItem">
            <NavLink to="/login" style={{textDecoration:"none",color:"inherit"}} >
             LOGIN </NavLink>
             </li>
             <li className="topListItem">
            <NavLink to="/register" style={{textDecoration:"none",color:"inherit"}} >
             REGISTER</NavLink>
             </li>
             </ul>
          )
        }
        
       
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



