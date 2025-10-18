import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'MongoDB', level: 85 },
    { name: 'Docker', level: 80 },
    { name: 'Azure', level: 75 },
    { name: 'Git', level: 90 }
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
              <h3>I'm a passionate developer who specializes in RAG and scalable backend systems</h3>
              <p>
                With 1 year of experience in software development, I specialize in building 
                Retrieval-Augmented Generation (RAG) systems and highly scalable backend architectures. 
                I'm passionate about clean code, system design, and continuous learning in the rapidly 
                evolving field of AI and cloud technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies or creating Music.
              </p>
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
