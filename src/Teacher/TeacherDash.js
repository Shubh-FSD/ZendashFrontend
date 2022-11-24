import React from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import StaffInterview from "./StaffInterview";
import StaffQuery from "./StaffQuery";
import StaffSidebar from "./StaffSidebar";
import StaffTask from "./StaffTask";
import StaffWebcode from "./StaffWebcode";

function TeacherDash() {
  return (
    <div className="container-fluid">
      <div>
        <StaffSidebar />
      </div>
      <div>
        <div>
          <h1>Teacher Dashboard</h1>
        </div>
        <div>
          {/* <Routes>
            <Route path="/" element={<StaffTask />} />
            <Route path="/query" element={<StaffQuery />} />
            <Route path="/webcode" element={<StaffWebcode />} />
            <Route path="/interview" element={<StaffInterview />} />
          </Routes> */}
          
        </div>
      </div>
    </div>
  );
}

export default TeacherDash;
