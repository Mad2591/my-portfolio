import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-info">Email: madhuripatil2591@gmail.com</p>
      <div className="cv-download">
        <a href="Your_CV_Download_Link" className="cv-button">Download CV</a>
        <p className="cv-note">*Please contact me directly for my CV.</p>
      </div>
    </div>
  );
}

export default Contact;
