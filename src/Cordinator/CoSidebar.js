import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import axios from "axios";
// import env from "../enviroinment";
// import { useNavigate } from "react-router-dom";
// import Spinner from "react-bootstrap/Spinner";
import "../StudentCSS/student.css";
import { Link } from "react-router-dom";

import {
  FaTh,
  FaBars,
} from "react-icons/fa";

const CoSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "Add",
      name: "Add",
      icon: <FaTh />,
    },
    {
      path: "/productList",
      name: "Log-Out",
      icon: <FaBars />,
    },
  ];
  return (
    <div className="container-fluid">
    <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
      <div className="top_section">
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          ZEN
        </h1>
        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>
      {menuItem.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className="link"
          activeclassName="active"
        >
          <div className="icon">{item.icon}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
    <main>{children}</main>
  </div>
  );
}

export default CoSidebar;



