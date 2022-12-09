import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import Interview from "./Student/Interview";
import Query from "./Student/Query";
import Class from "./Student/Class";
import Dashboard from "./Student/Dashboard";
import UpdateMark from "./Teacher/UpdateMark";
import UpInterviewMark from "./Teacher/UpInterviewMark";
import UpWebcodeMark from "./Teacher/UpWebcodeMark";
import StudWebcode from "./Student/StudWebcode";
import UpQuery from "./Teacher/UpQuery";
import StaffClass from "./Teacher/StaffClass";
import CoRegister from "./Cordinator/CoRegister";
import StuAdd from "./Cordinator/StuAdd";
import TeacherAdd from "./Cordinator/TeacherAdd";
import Upstu from "./Cordinator/UpStu";
import UpTeach from "./Cordinator/UpTeach";
import UpCordi from "./Cordinator/UpCordi";

function App() {
  return (
     
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/ForgotReq" element={<ForgotReq />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/RegisterReq" element={<RegisterReq />} />
            
            <Route path="/CordinatorDash" element={<CordinatorDash />} >
            <Route index element={<CoRegister />} />
                <Route path="AddCordinator" element={<CoRegister />} />
                <Route path="AddStudent" element={<StuAdd />} />
                <Route path="AddTeacher" element={<TeacherAdd />} />
                </Route>

            <Route path="/StudentDash" element={<StudentDash />} >
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="class" element={<Class />} />
                <Route path="query" element={<Query />} />
                <Route path="studentTask" element={<Task />} />
                <Route path="webcode" element={<StudWebcode />} />
                <Route path="interview" element={<Interview />} />
            </Route>
            <Route path="/teacherDash" element={<TeacherDash />} >
               <Route index element={<StaffQuery />} />
               <Route path="class" element={<StaffClass />} />
               <Route path="task" element={<StaffTask />} />
               <Route path="query" element={<StaffQuery />} />  
               <Route exact path="StaffWebcode" element={<StaffWebcode />} />
               <Route path="interview" element={<StaffInterview />} /> 
               {/* <Route  path="upInter/:id" element={<UpInterviewMark />} />   */}
              
            </Route>
            <Route  path="/updateMark/:id"  element={<UpdateMark />} />  
            <Route  path="/upWebMark/:id" element={<UpWebcodeMark />} /> 
            <Route  path="/upInter/:id" element={<UpInterviewMark />} />  
            <Route  path="/upQuery/:id" element={<UpQuery />} />  

            <Route  path="/Upstu/:id" element={<Upstu />} /> 
            <Route  path="/UpTeach/:id" element={<UpTeach />} />  
            <Route  path="/UpCordi/:id" element={<UpCordi />} />  
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
          
  );
}

export default App;
