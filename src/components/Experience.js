import React from "react";
import "../styles/experience.css";

function Experience() {
  return (
    <div className="page">
      <h3 className="page-title">EXPERIENCE</h3>
      <ul className="experience-list">
        <li className="experience-item">
          MANCHESTER CODES | SOFTWARE DEVELOPMENT BOOTCAMP
          <br />
          <i>JANUARY - JULY 2022</i>
        </li>
        <p>
          {"The course provided an up-to-date full-stack curriculum with an emphasis on best practices, mobile-first responsive design and user experience, object orientated programming and test driven development.".toUpperCase()}
        </p>
        <br />
        <li className="experience-item">
          NBROWN GROUP | SENIOR COMPLAINTS ADVISOR
          <br />
          <i>JANUARY 2022 - PRESENT</i>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
