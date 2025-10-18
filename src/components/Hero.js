import React from 'react';
import './Hero.css';

const Hero = ({ navigateToSection }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Sudhesh Hegde</span>
            </h1>
            <h2 className="hero-subtitle">
              Backend Developer & RAG Systems Specialist
            </h2>
            <p className="hero-description">
              I build highly scalable backend systems and Retrieval-Augmented Generation (RAG) 
              solutions that power intelligent applications and drive business growth.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => navigateToSection(3)}
              >
                Get In Touch
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Resume
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
