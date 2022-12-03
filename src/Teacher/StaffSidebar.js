import React, { useState } from "react";
import "../StudentCSS/student.css";
import { Link } from "react-router-dom";

import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";


const StaffSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "query",
      name: "Query",
      icon: <FaUserAlt />,
    },
    {
      path: "task",
      name: "Task",
      icon: <FaRegChartBar />,
    },
    {
      path: "interview",
      name: "Interview",
      icon: <FaCommentAlt />,
    },
    {
      path: "StaffWebcode",
      name: "Webcode",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Log-Out",
      icon: <FaThList />,
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
};

export default StaffSidebar;
