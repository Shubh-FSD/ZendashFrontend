import React from "react";
import { Outlet } from "react-router-dom";
import StaffSidebar from "./StaffSidebar";
import "../StudentCSS/TeacherDash.css";

function TeacherDash() {
  return (


    <div className=" bag ">
    
      <div className="row take ">
         <div className="take col-md-2 col-sm-2 col-lg-2"><StaffSidebar /> </div>
         <div className="  col-md-9 col-sm-9 col-lg-9 ">
         <div className="dashContent ">
                 <div>
                 <h1>Teacher Dashboard</h1>
                    <Outlet />
                 </div>
                 </div>
         </div>
         </div>
         
      </div>
  );
}

export default TeacherDash;
