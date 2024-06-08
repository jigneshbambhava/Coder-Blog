import React from 'react';
import '../css/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Created by Jigneshbambhava</p>
        <p>&copy; {currentYear} . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
