// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#f0f0f0',
  padding: '5px',
  marginLeft:'215px',
  marginRight:'215px',
};

const sectionStyle = {
  flex: 1,
  textAlign: 'center',
};

const headingStyle = {
  marginBottom: '10px',
};

const linkStyle = {
  display: 'block',
  marginBottom: '5px',
  color: '#333',
  textDecoration: 'none',
};

const hoverLinkStyle = {
  textDecoration: 'underline',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Company</h4>
        <Link to="/about-us" style={linkStyle}>About Us</Link>
        <Link to="/careers" style={linkStyle}>Careers</Link>
        <Link to="/blog" style={linkStyle}>Blog</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Our Services</h4>
        <Link to="/featured-categories" style={linkStyle}>Featured Categories</Link>
        <Link to="/top-products" style={linkStyle}>Top Products</Link>
        <Link to="/all-doctors-list" style={linkStyle}>All Doctors List</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Need Help</h4>
        <Link to="/browse-all-medicines" style={linkStyle}>Browse All Medicines</Link>
        <Link to="/browse-all-stores" style={linkStyle}>Browse All Stores</Link>
        <Link to="/FAQ" style={linkStyle}>FAQ</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Policy Info</h4>
        <Link to="/terms-and-conditions" style={linkStyle}>Terms and Conditions</Link>
        <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Customer Support Policy</Link>
      </div>
      {/* Add more sections as needed */}
    </footer>
  );
};

export default Footer;
