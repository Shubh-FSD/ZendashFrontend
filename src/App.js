import { Route, Routes, Navigate } from "react-router-dom";
import StudentDash from "./Student/StudentDash";
import "./App.css";
import CordinatorDash from "./Cordinator/CordinatorDash";
import Forgot from "./LoginComponents/Forgot";
import ForgotReq from "./LoginComponents/ForgotReq";
import Login from "./LoginComponents/Login";
import Register from "./LoginComponents/Register";
import RegisterReq from "./LoginComponents/RegisterReq";

import TeacherDash from "./Teacher/TeacherDash";
import StaffQuery from "./Teacher/StaffQuery";
import StaffWebcode from "./Teacher/StaffWebcode";
import StaffInterview from "./Teacher/StaffInterview";
import StaffTask from "./Teacher/StaffTask";
import Task from "./Student/Task";
import Webcode from "./Student/Webcode";
import Interview from "./Student/Interview";
import Query from "./Student/Query";
import Class from "./Student/Class";
import Dashboard from "./Student/Dashboard";
import UpdateMark from "./Teacher/UpdateMark";
import UpInterviewMark from "./Teacher/UpInterviewMark";
import UpWebcodeMark from "./Teacher/UpWebcodeMark";

function App() {
  return (
    <div>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/ForgotReq" element={<ForgotReq />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/RegisterReq" element={<RegisterReq />} />
            
            <Route path="/CordinatorDash" element={<CordinatorDash />} />
            <Route path="/StudentDash" element={<StudentDash />} >
                <Route index element={<Task />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="class" element={<Class />} />
                <Route path="query" element={<Query />} />
                <Route path="studentTask" element={<Task />} />
                <Route path="webcode" element={<Webcode />} />
                <Route path="interview" element={<Interview />} />
            </Route>
            <Route path="/teacherDash" element={<TeacherDash />} >
               <Route index element={<StaffTask />} />
               <Route path="task" element={<StaffTask />} />
               <Route path="query" element={<StaffQuery />} />  
               <Route path="StaffWebcode" element={<StaffWebcode />} />
               <Route path="interview" element={<StaffInterview />} />
               <Route  path="updateMark/:id"  element={<UpdateMark />} />  
               <Route  path="upInter/:id" element={<UpInterviewMark />} />  
               <Route  path="upWebMark/:id" element={<UpWebcodeMark />} /> 
            </Route>

            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
