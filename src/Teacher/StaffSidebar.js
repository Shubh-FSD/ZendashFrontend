import React, { useState } from "react";
import "../StudentCSS/student.css";
import { Link } from 'react-router-dom';
import logo from "../assets/imgs/zenclass.jpg";
import { RiCloseCircleFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineQueryStats } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';


import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
}from "react-icons/fa";


// function StaffSidebar() {
const StaffSidebar = ({children}) => {

  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/",
          name:"Dashboard",
          icon:<FaTh/>
      },
      {
          path:"/query",
          name:"Query",
          icon:<FaUserAlt/>
      },
      {
          path:"/analytics",
          name:"Task",
          icon:<FaRegChartBar/>
      },
      {
          path:"/comment",
          name:"Comment",
          icon:<FaCommentAlt/>
      },
      {
          path:"/webcode",
          name:"Webcode",
          icon:<FaShoppingBag/>
      },
      {
          path:"/productList",
          name:"Log-Out",
          icon:<FaThList/>
      }
  ]
  return (

    //  OLDER SIDEBAR
    //     <aside>
    //       <div className="top ">
          
    //         <div className="logo ">
    //           <img src={logo} alt="" />
    //           <h1 className="fs-3">Student</h1>
    //         </div>
    //         <div className="close" >
    //           <RiCloseCircleFill />
    //         </div>
    //       </div>
    //       <div className="sidebar">
    //       <a className=" Active" href="/">
    //           <span ><MdDashboard/></span>
    //           <div className="menu">Task</div>
    //         </a>
    //         <a  href="/">
    //           <span ><SiGoogleclassroom/></span>
    //           <div className="menu">Query</div>
    //         </a>
    //         <a href="/">
    //           <span><MdOutlineQueryStats/></span>
    //         <div className="menu" >Webcode</div>
    //         </a>
    //         <a href="/">
    //           <span><FaTasks/></span>
    //         <div className="menu">Interview</div>
    //         </a>
    //         <a href="/">
    //           <span><FaTasks/></span>
    //         <div className="menu">Logout</div>
    //         </a>
    //       </div>
    //     </aside>

    //     New Sidebar 

<div className="container-fluid">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ZEN</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
  

    
  );

}

export default StaffSidebar;



