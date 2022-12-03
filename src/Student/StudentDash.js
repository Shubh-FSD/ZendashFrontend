import React, {  } from "react";
import {  Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../StudentCSS/studentTask.css";

function StudentDash() {
  return (
      <div className="container-fluid set">
      <div className="row ">
         <div className="col"><Sidebar /> </div>
         <div className=" col ">
         <div className="dashContent ">
                 <div>
                 <h1>Student Dashboard</h1>
                    <Outlet />
                 </div>
                 </div>
         </div>
         </div>
         
      </div>
    
  );
}

export default StudentDash;
