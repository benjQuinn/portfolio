import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="page">
      <h3 className="page-title">CONTACT</h3>
      <ul className="contact-list">
        <li className="contact-item">NAME</li>
        <p>BEN QUINN</p>

        <br />

        <li className="contact-item">EMAIL</li>
        <p>
          <a className="email" href="mailto:benjamesquinn@gmail.com">
            {"benjamesquinn@gmail.com".toUpperCase()}
          </a>
        </p>

        <br />

        <li className="contact-item">PHONE</li>
        <p>+44 7596 258 362</p>
      </ul>
    </div>
  );
}

export default Contact;
