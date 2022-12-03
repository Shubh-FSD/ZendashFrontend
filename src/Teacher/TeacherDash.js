import React from "react";
import { Outlet } from "react-router-dom";
import StaffSidebar from "./StaffSidebar";
import "../StudentCSS/TeacherDash.css";

function TeacherDash() {
  return (
    // <div className="container-fluid">
    //   <div>
    //     <StaffSidebar />
    //   </div>
    //   <div>
    //     <div>
    //       <h1>Teacher Dashboard</h1>
    //     </div>
    //     <div>
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>

    <div className="container-fluid wallpaper3">
    
      <div className="row ">
         <div className="col"><StaffSidebar /> </div>
         <div className=" col ">
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
