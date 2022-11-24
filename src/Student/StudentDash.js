import React, {  } from "react";
import {  Route, Routes } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import axios from "axios";
// import env from "../enviroinment";
// import { useNavigate } from "react-router-dom";
// import Spinner from "react-bootstrap/Spinner";
import "../StudentCSS/Gridcss.css";
import Capstone from "./Capstone";
import Class from "./Class";
import Dashboard from "./Dashboard";
import Interview from "./Interview";
import Query from "./Query";
import "./Sidebar";
import Sidebar from "./Sidebar";
import Task from "./Task";
import Webcode from "./Webcode";

function StudentDash() {
  return (
      <div className="container-fluid">
         <Sidebar/> 
         <div>
         <Routes>
         <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="/class" element={<Class />} />
         <Route path="/query" element={<Query />} />
         <Route path="/" element={<Task />} />
         <Route path="/webcode" element={<Webcode />} />
         <Route path="/capstone" element={<Capstone />} />
         <Route path="/interview" element={<Interview />} />
         </Routes>
         </div>
      </div>
    
  );
}

export default StudentDash;
