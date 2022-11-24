import React from "react";
import "../CSS/Welcome.css";
import { useNavigate } from "react-router-dom";

export default function Navbar1() {
  let navigate = useNavigate();
  const auth = localStorage.getItem('token');
  let handleBeforeLogin = async () => {
    navigate("/loginBefore");
  };
  let handleRegister = async () => {
    navigate("/Register");
  };
  let handleBeforeLogout = async () => {
    localStorage.clear();
    navigate("/loginBefore");
  };

 
  return (

    <nav
    className="navbar  navbar-expand-lg bg-dark fixed-top"
    style={{ color: "white" }}
  >
    <div className="container-fluid">
      <a className="navbar-brand" style={{ color: "white" }} href="/">
        INDO Services
      </a>
      <div className="d-flex">
      
      <div >
        {auth ?

        <button
          className="btn btn-outline-success mx-2"
          onClick={() => handleBeforeLogout()}
        >
          LOG Out
        </button>: <button
          className="btn btn-outline-success mx-2"
          onClick={() => handleBeforeLogin()}
        >
          LOG IN
        </button>}
      </div>
      <div>
        <button
          className="btn btn-outline-success me-auto"
          onClick={() => handleRegister()}
        >
          Register
        </button>
      </div>
      </div>
    </div>
  </nav>
  );
}
