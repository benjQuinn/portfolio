import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <span className="tag">©2022 - Created by Ben Quinn</span>
      </div>
      <div className="links">
        <span className="link">
          <a
            href="https://twitter.com/benjQuinn_"
            target="_blank"
            rel="noreferrer"
            className="twitter"
          >
            TWITTER
          </a>
        </span>
        <span className="link">
          <a
            href="https://github.com/benjQuinn"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            GITHUB
          </a>
        </span>
        <span className="link">
          <a
            href="https://www.linkedin.com/in/ben-quinn-19828916b"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            LINKEDIN
          </a>
        </span>
        <span className="link">
          <a
            href="https://www.codewars.com/users/benjQuinn"
            target="_blank"
            rel="noreferrer"
            className="codewars"
          >
            CODEWARS
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
