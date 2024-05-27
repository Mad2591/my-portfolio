import React from 'react';
import './Contact.css';
import pdf from './assets/Madhuri.pdf'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-info">Email: madhuripatil2591@gmail.com</p>
      <div className="cv-download">
        <a href={pdf}  download className="cv-button">Download CV</a>
      </div>
    </div>
  );
}

export default Contact;
