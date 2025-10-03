import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
          <Link to="/signup#login-form-section" className="signup-button">Sign up now</Link>
        </div>
        <div className="hero-image">
          <img src="/media/homeHero.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;