import React from "react";
import "../CSS/Welcome.css";
export default function Navbar2() {

 
  return (
    <div id="content">
      {/* Topbar */}
      <nav
        className="navbar  navbar-expand-lg bg-dark fixed-top"
        style={{ color: "white" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "white" }} href="/">
            INDO Services
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a
                  className="nav-link active me-4"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
