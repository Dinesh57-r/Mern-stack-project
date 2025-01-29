import React from "react";
import './App.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-info">Phone: 9342889660</p>
      <p className="contact-info">
        Email: <a className="contact-link" href="mailto:dinesh.r2023aiml@sece.ac.in">dinesh.r2023aiml@sece.ac.in</a>
      </p>
      <p className="contact-info">
        GitHub: <a className="contact-link" href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">github.com/your-github-username</a>
      </p>
      <p className="contact-info">
        LinkedIn: <a className="contact-link" href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-linkedin-username</a>
      </p>
    </div>
  );
};

export default Contact;
