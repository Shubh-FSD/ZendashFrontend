import React, {  } from "react";
// import Button from "react-bootstrap/Button"
 import axios from "axios";
  import env from "../enviroinment";
//  import Spinner from "react-bootstrap/Spinner";
import "../CSS/Login.css";
import CoSidebar from "./CoSidebar";
import CoRegister from "./CoRegister";
import {  Route, Routes } from "react-router-dom";
import CoRegisterStatus from "./CoRegisterStatus";


function CordinatorDash() {

  return (
    <>
         <div className="container-fluid">
         <CoSidebar/> 
         <div>
         <div>
         <h1>Cordinator Dashboard</h1>
        </div>
        <div>
         <Routes>
         <Route path="/" element={<CoRegister />} />
         <Route path="/CoRegisterStatus" element={<CoRegisterStatus />} />
         </Routes>
         </div>
         </div>
      </div>
    </>
  );
}

export default CordinatorDash;
