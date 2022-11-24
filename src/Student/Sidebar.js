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
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineQueryStats } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { AiFillInteraction } from "react-icons/ai";
import { BsCapslockFill } from "react-icons/bs";
import { GrWebcam } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";

function Sidebar() {
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
              <span ><MdDashboard/></span>
              <div className="menu">Dashboard</div>
            </a>
            <a  href="/">
              <span ><SiGoogleclassroom/></span>
              <div className="menu">Class</div>
            </a>
            <a href="/">
              <span><MdOutlineQueryStats/></span>
            <div className="menu" >Query</div>
            </a>
            <a href="/">
              <span><FaTasks/></span>
            <div className="menu">Task</div>
            </a>
            <a href="/">
              <span><GrWebcam/></span>
            <div className="menu">Webcode</div>
            </a>
            <a href="/">
              <span><BsCapslockFill/></span>
            <div className="menu">Capstone</div>
            </a>
            <a href="/">
              <span><AiFillInteraction/></span>
            <div className="menu">Interview</div>
            </a>
            <a href="/">
              <span><AiFillInteraction/></span>
            <div className="menu">Logout</div>
            </a>
          </div>
        </aside>
  );
}

export default Sidebar;



