import React from 'react';
import './Experience.css';

const Experience = () => {
      const experiences = [
        {
          title: 'Software Engineer',
          company: 'Shramajeevi Television Pvt Ltd',
          period: 'Present',
          description: 'Building backend systems, video server, and RAG solutions for intelligent applications and driving business growth.',
          technologies: ['React', 'TypeScript', 'Redux', 'Jest', 'Webpack']
        },
        {
          title: 'Application Developer Intern',
          company: 'Shramajeevi Television Pvt Ltd',
          period: '2024 - 2025',
          description: (
            <>
              Built essential features for the mobile app{' '}
              <a 
                href="https://play.google.com/store/apps/details?id=com.shramajeevi.farmtv&hl=en_IN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="farmtv-link"
              >
                FarmTV
              </a>
            </>
          ),
          technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS']
        },
      ];


  return (
    <section id="experience" className="experience">
      <div className="container">
            <div className="experience-content">
              <div className="experience-section">
                <h3 className="subsection-title">Work Experience</h3>
                <div className="timeline-horizontal">
                  <div className="timeline-cards">
                    {experiences.map((exp, index) => (
                      <div key={index} className="timeline-item-horizontal">
                        {index === 0 && (
                          <div className="experience-header current-header">
                            <span className="header-label">Current</span>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="experience-header past-header">
                            <span className="header-label">Past Experience</span>
                          </div>
                        )}
                        <div className="timeline-content-horizontal">
                          <h4 className="job-title">{exp.title}</h4>
                          <p className="company-name">{exp.company}</p>
                          <p className="job-period">{exp.period}</p>
                          <p className="job-description">{exp.description}</p>
                          <div className="technologies">
                            {exp.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Experience;
