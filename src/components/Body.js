import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/body.css";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function Body() {
  return (
    <Router>
      <div className="body">
        <NavBar />
        <Routes>
          <Route exact path="/about-me" element={<AboutMe />} />
          <Route exact path="/tech-stack" element={<TechStack />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Body;
