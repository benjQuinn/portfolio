import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-element">
          <Link to="/about-me">ABOUT ME</Link>
          <span>101</span>
        </li>
        <li className="navbar-element">
          <Link to="/tech-stack">TECH STACK</Link>
          <span>102</span>
        </li>
        <li className="navbar-element">
          <Link to="/experience">EXPERIENCE</Link>
          <span>103</span>
        </li>
        <li className="navbar-element">
          <Link to="/projects">PROJECTS</Link>
          <span>104</span>
        </li>
        <li className="navbar-element">
          <Link to="/contact">CONTACT</Link>
          <span>105</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
