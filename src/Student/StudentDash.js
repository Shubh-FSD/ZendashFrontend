import React, {  } from "react";
import {  Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import "../StudentCSS/studentTask.css";
import "../StudentCSS/TeacherDash.css";

function StudentDash() {
  return (

      <div className=" bag ">
    
    <div className="row take ">
       <div className="take col-md-2 col-sm-2 col-lg-2"><Sidebar /> </div>
       <div className="  col-md-9 col-sm-9 col-lg-9 ">
       <div className="dashContent dashContent-size">
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
