import React from 'react';
import './Footer.css'; // Add your own CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="github-link">
        <h3>GitHub</h3>
        <p>Check out my GitHub repositories:</p>
        <a href="https://github.com/tdoolittle3" target="_blank" rel="noopener noreferrer">
          github.com/tdoolittle3
        </a>
      </div>
      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="logo-container">
          <img src="react-logo.png" alt="React" />
          <img src="nodejs-logo.png" alt="Node.js" />
          <img src="mongodb-logo.png" alt="MongoDB" />
          {/* Add more tech stack logos */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
