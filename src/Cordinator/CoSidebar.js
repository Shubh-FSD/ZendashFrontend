import React, {  } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import axios from "axios";
// import env from "../enviroinment";
// import { useNavigate } from "react-router-dom";
// import Spinner from "react-bootstrap/Spinner";
import "../StudentCSS/student.css";
import logo from "../assets/imgs/zenclass.jpg";
import { RiCloseCircleFill } from "react-icons/ri";
import { AiFillInteraction } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";

function CoSidebar() {
  return (
        <aside>
          <div className="top ">
            {/* <div className="logo d-flex align-items-center"> */}
            <div className="logo ">
              <img src={logo} alt="" />
              <h1 className="fs-3">Student</h1>
            </div>
            <div className="close" >
              <RiCloseCircleFill />
            </div>
          </div>
          <div className="sidebar">
          <a className=" Active" href="/">
              <span ><BiAddToQueue/></span>
              <div className="menu">Add</div>
            </a>
            <a href="/">
              <span><AiFillInteraction/></span>
            <div className="menu">Logout</div>
            </a>
          </div>
        </aside>
  );
}

export default CoSidebar;



