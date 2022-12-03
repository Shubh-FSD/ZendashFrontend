import React from "react";
// import Button from "react-bootstrap/Button"
//  import axios from "axios";
//   import env from "../enviroinment";
import "../CSS/CordinatorCSS.css";
import CoSidebar from "./CoSidebar";
import CoRegister from "./CoRegister";
import { Route, Routes } from "react-router-dom";

function CordinatorDash() {
  return (
      <div className="container-fluid">
        <div><CoSidebar /></div>
        <div className="login-wrapper">
           <div><h1>Cordinator Dashboard</h1></div> 
            <div>
            <Routes>
              <Route path="/" element={<CoRegister />} />
            </Routes>
            </div>
        </div>
      </div>
  );
}

export default CordinatorDash;
