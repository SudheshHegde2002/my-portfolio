import React from 'react';
import './About.css';

const About = () => {
  const skillsByCategory = {
    'Languages': [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'Java' },
    ],
    'Frameworks & Libraries': [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Express.js' },
      { name: 'Flask' },
      { name: 'FastAPI' }
    ],
    'Databases': [
      { name: 'MongoDB' },
      { name: 'MySQL' },
      {name:'Firestore'},
    ],
    'Cloud Platforms': [
      { name: 'Microsoft Azure' },
      { name: 'Google Cloud' },
      { name: 'Firebase' },
      { name:'Cloudflare'}
    ],
    'AI/ML Tools': [
      { name: 'Faiss' },
      { name: 'Qdrant' }
    ],
    'DevOps & Tools': [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'GitHub Actions' },
      { name: 'Jenkins' },
      { name:'Xcode'}
    ]
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
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
          
          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-categories">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div key={category} className="skill-category-section">
                  <h4 className="category-title">{category}</h4>
                  <div className="skills-grid">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-card">
                        <div className="skill-name">{skill.name}</div>
                      </div>
                    ))}
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
