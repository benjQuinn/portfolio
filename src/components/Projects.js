import React from "react";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="page">
      <h3 className="page-title">PROJECTS</h3>
      <ul className="projects-list">
        <li className="project-item">
          <a
            href="https://www.youtube.com/watch?v=2w4dj_7r-Uc"
            target="_blank"
            rel="noreferrer"
          >
            ETHICAL BRANDS
          </a>
        </li>
        <p>
          {"An app to empower consumers to drive social change using their own buying power by telling the user how aligned a brand is with a cross- section of the current most pressing global causes.".toUpperCase()}
        </p>

        <br />

        <li className="project-item">
          <a
            href="https://github.com/benjQuinn/cruise-ships"
            target="_blank"
            rel="noreferrer"
          >
            CRUISE SHIPS
          </a>
        </li>
        <p>
          {"Simple journey simulator built using an Object Orientated Programming approach, with a graphical user interface.".toUpperCase()}
        </p>

        <br />

        <li className="project-item">
          <a
            href="https://github.com/benjQuinn/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            WEATHER APP
          </a>
        </li>
        <p>
          {"A UK weather-app made with React, displaying live weather from an API. Components fully tested using Jest and the React Testing Library".toUpperCase()}
        </p>
      </ul>
    </div>
  );
}

export default Projects;
