import React, { useState } from "react";
import "./NavBar.css";
import smalllogo from "../../assets/LUMIERELOGO.png";

function NavBar() {



  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
          <img className='smalllogo' src={smalllogo} alt="lumiereicon" />
          </div>

          <ul className= "nav-menu">
            <li className="nav-item">
            <a className="nav-links" href="#">HOME</a>
            </li>
            <li className="nav-item">
             <a className="nav-links" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
            <a className="nav-links" href="#">EVENTS</a>
            </li>
            <li className="nav-item">
            <a className="nav-links" href="#">WORKSHOPS</a>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default NavBar;
