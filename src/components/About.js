import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'CSS/SCSS', level: 90 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>I'm a passionate developer who loves creating amazing digital experiences</h3>
              <p>
                With over 3 years of experience in web development, I specialize in building 
                modern, responsive applications using React, Node.js, and other cutting-edge 
                technologies. I'm passionate about clean code, user experience, and continuous learning.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
