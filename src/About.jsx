import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="about-heading">About Me</h2>
      <p className="about-description">
        As a recent graduate with a Bachelor's in Computer Application, I am an ambitious and passionate individual with a keen interest in frontend development. My goal is to leverage my academic background and practical experience to contribute to innovative and user-centric web applications.
      </p>
      <div className="about-cards">
        <div className="card">
          <div className="card-info">
            <h3 className="title">Profile</h3>
            <p>Front End Developer</p>
          </div>
        </div>
        <div className="card">
          <div className="card-info">
            <h3 className="title">Skills</h3>
            <ul>
              <li>Languages: HTML, CSS, JavaScript, C, Python</li>
              <li>Frameworks/Libraries: React.js, Bootstrap, Tailwind CSS, WordPress, Wix</li>
              <li>Version Control: GitHub, Git, Subversion</li>
              <li>Responsive Design: Media queries</li>
              <li>Tools: Visual Studio Code, Eclipse IDE, Trello, Selenium, Microsoft Visual Studio</li>
              <li>Database: MySQL, Microsoft Access</li>
              <li>Editing Tools: Canva, Filmora, Gimp</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-info">
            <h3 className="title">Education</h3>
            <ul>
              <li>Bachelor of Computer Application, GVM's GGPR College of Commerce & Economics, Ponda, 2024</li>
              <li>Bachelor of Arts, Indira Gandhi National Open University Delhi, 2018</li>
              <li>Diploma in Teacher Education, KMS Adhyapak Vidyalay Mithbav, Devgad, 2010</li>
              <li>Higher Secondary Certificate, B.M.Gogte College Shiroda Vengurla, 2012</li>
              <li>Secondary School Certificate, S.F.X English Medium School Ajgaon, 2008</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-info">
            <h3 className="title">Experience</h3>
            <ul>
              <li>Assistant Teacher, Matoshri Parvati Raut Vidyalay English Medium School, 2014 - 2017</li>
              <li>Assistant Teacher, Late Pri.R. R. Like English Medium School, 2012 - 2013</li>
              <li>Office Assistant, Yashaswi Academy for Skills, 2019 - 2020</li>
              <li>Front Office Assistant, Sanofi India Ltd, 2017 - 2018</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
