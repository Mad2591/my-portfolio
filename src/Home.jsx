import React from 'react';
import './Home.css';
import logo from './Assest/logo.jpg'; // import your profile photo file

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="profile-photo-container">
          <img src={logo} alt="Profile" className="profile-photo animated" />
        </div>
        <h2 className="home-heading glow-text">Welcome to Madhuri's Portfolio</h2>
        <h3 className="home-subheading glow-text">Madhuri Anil Patil</h3>
        <p className="home-description">I'm a passionate Front End Developer crafting beautiful and functional web experiences.</p>
      </div>
    </div>
  );
}

export default Home;
