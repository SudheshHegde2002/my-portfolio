import React from 'react';
import './Experience.css';

const Experience = () => {
      const experiences = [
        {
          title: 'Senior Frontend Developer',
          company: 'Tech Company Inc.',
          period: '2022 - Present',
          description: 'Led the development of multiple React applications, improved performance by 40%, and mentored junior developers.',
          technologies: ['React', 'TypeScript', 'Redux', 'Jest', 'Webpack']
        },
        {
          title: 'Full Stack Developer',
          company: 'StartupXYZ',
          period: '2021 - 2022',
          description: 'Built end-to-end web applications using React and Node.js, collaborated with design team to implement pixel-perfect UIs.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS']
        }
      ];


  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
        </div>

            <div className="experience-content">
              <div className="experience-section">
                <h3 className="subsection-title">Work Experience</h3>
                <div className="timeline-horizontal">
                  <div className="timeline-cards">
                    {experiences.map((exp, index) => (
                      <div key={index} className="timeline-item-horizontal">
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
                  <div className="timeline-line-container"></div>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Experience;
