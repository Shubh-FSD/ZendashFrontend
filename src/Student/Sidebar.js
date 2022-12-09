import React, {  useState} from "react";
import { Link } from "react-router-dom";
import "../StudentCSS/student.css";
import {
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaBuffer,
  FaElementor,
  FaSortAmountUp,
  FaTh
} from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "class",
      name: "Class",
      icon: <FaUserAlt />,
    },
    {
      path: "query",
      name: "Query",
      icon: <FaBuffer />,
    },
    {
      path: "studentTask",
      name: "Task",
      icon: <FaRegChartBar />,
    },
    {
      path: "interview",
      name: "Interview",
      icon: <FaSortAmountUp />,
    },
    
    {
      path: "webcode",
      name: "Webcode",
      icon: <FaElementor />,
    },
    {
      path: "/",
      name: "Log-Out",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="">
    <div style={{ width: isOpen ? "13rem" : "3rem" }} className="sidebar">
      <div className="top_section">
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          ZEN
        </h1>
        <div style={{ marginLeft: isOpen ? "3rem" : "0rem" }} className="bars">
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
    
  </div>
  );
}

export default Sidebar;



