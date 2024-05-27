import React from 'react';
import './Projects.css';
import p1 from './Assest/p1.jpg'; // Replace with your actual path
import p3 from './Assest/p3.jpg'; // Replace with your actual path
import p2 from './Assest/p2.jpg'; // Replace with your actual path
import p4 from './Assest/p4.jpg'; // Replace with your actual path

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <img src={p1} alt="E-commerce Website" className="project-image" />
          <div className="project-content">
            <a href="http://auronchiess.netlify.app/" className="project-link">
              <h3 className="project-title">E-commerce Website (using React.js)</h3>
            </a>
            <p className="project-description">
              Developed a responsive and dynamic e-commerce website with React.js, showcasing a variety of products, integrated with a shopping cart and checkout functionality.
              Implemented state management for seamless user interaction and utilized APIs to fetch and display product data.
            </p>
          </div>
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
        
        <div className="project-card">
          <img src={p4} alt="Personal Portfolio Website" className="project-image" />
          <div className="project-content">
            <a href="https://master--madhuri-portfolio.netlify.app/" className="project-link">
              <h3 className="project-title">Personal Portfolio Website</h3>
            </a>
            <p className="project-description">
              Designed and developed a personal portfolio website to showcase my skills and projects using React Js, CSS, and JavaScript. Ensured a responsive design for optimal viewing across various devices.
            </p>
          </div>
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
        
        <div className="project-card">
          <img src={p3} alt="Demo Blog Website" className="project-image" />
          <div className="project-content">
            <a href="https://main--blogssample.netlify.app/" className="project-link">
              <h3 className="project-title">Demo Blog Website</h3>
            </a>
            <p className="project-description">
              Created a demo blog website with a user-friendly interface using React Js, CSS, and JavaScript. Integrated features for creating, reading, updating, and deleting blog posts. Implemented responsive design for accessibility across all devices.
            </p>
          </div>
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
        
        <div className="project-card">
          <img src={p2} alt="FirstCry Clone" className="project-image" />
          <div className="project-content">
            <a href="https://main--firstcryclonewebsite.netlify.app/" className="project-link">
              <h3 className="project-title">FirstCry Clone Website</h3>
            </a>
            <p className="project-description">
              Developed a clone of the FirstCry website using HTML and CSS. Emulated the design and functionality of the original site, including product listings, shopping cart, and user authentication features.
            </p>
          </div>
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
