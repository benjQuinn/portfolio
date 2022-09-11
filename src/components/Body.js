import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/body.css";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";

function Body() {
  return (
    <Router>
      <div className="body">
        <NavBar />
        <Routes>
          <Route exact path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Body;
