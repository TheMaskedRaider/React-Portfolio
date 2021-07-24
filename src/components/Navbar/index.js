import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar'
import PDFView from "../PDFView";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navigation() {
  return (

    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand>Stephen Kadesky</Navbar.Brand>
      <div className="nav-wrapper container">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link

              to="/React-Portfolio"
              className={
                window.location.pathname === "/React-Portfolio" || window.location.pathname === "/about" || window.location.pathname === "/"
                  ? "nav-link active text-warning"
                  : "nav-link text-warning"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item ">
            <Link

              to="/projects"
              className={
                window.location.pathname === "/projects"
                  ? "nav-link active text-warning"
                  : "nav-link text-warning"
              }
            >
              Projects
            </Link>
  
          </li>
          <li className="nav-item ">
            <Link

              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active text-warning"
                  : "nav-link text-warning"
              }
            >
              Contact Me!
            </Link>
          </li>
        </ul>

        <Navbar.Brand> <PDFView/></Navbar.Brand>

        
        {/* <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
      </div>
    </Navbar>

  );
}

export default Navigation;
