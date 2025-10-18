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
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2021',
      description: 'Developed responsive websites and web applications for various clients, focusing on user experience and accessibility.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap']
    }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with dark mode support',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Netlify'],
      link: '#'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Projects</h2>
          <p className="section-subtitle">My professional journey and notable work</p>
        </div>

        <div className="experience-content">
          <div className="experience-section">
            <h3 className="subsection-title">Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
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

          <div className="projects-section">
            <h3 className="subsection-title">Featured Projects</h3>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image">
                    <div className="project-placeholder">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21,15 16,10 5,21"/>
                      </svg>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} className="project-link">View Project</a>
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

export default Experience;
