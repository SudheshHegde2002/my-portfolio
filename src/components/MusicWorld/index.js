import React, { useState, useEffect } from 'react';
import './MusicWorld.css';

const MusicWorld = ({ navigateToMusicSection }) => {
  const [currentMusicSection, setCurrentMusicSection] = useState(0); // 0: Hero, 1: Projects, 2: Contact

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && currentMusicSection > 0) {
        setCurrentMusicSection(currentMusicSection - 1);
      } else if (e.key === 'ArrowRight' && currentMusicSection < 2) {
        setCurrentMusicSection(currentMusicSection + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentMusicSection]);

  // Expose navigation function to parent
  useEffect(() => {
    if (navigateToMusicSection) {
      navigateToMusicSection(setCurrentMusicSection);
    }
  }, [navigateToMusicSection]);

  const musicProjects = [
    {
      title: 'Digital Dreams',
      description: 'An ambient electronic album exploring the intersection of technology and emotion',
      genre: 'Ambient Electronic',
      year: '2024',
      link: '#'
    },
    {
      title: 'Code & Beats',
      description: 'A collection of lo-fi tracks inspired by late-night coding sessions',
      genre: 'Lo-fi Electronic',
      year: '2023',
      link: '#'
    },
    {
      title: 'Neon Nights',
      description: 'Synthwave EP capturing the essence of cyberpunk aesthetics',
      genre: 'Synthwave',
      year: '2023',
      link: '#'
    }
  ];

  return (
    <div className="music-world">
      <div className="music-horizontal-container">
        <div 
          className="music-sections-wrapper"
          style={{ transform: `translateX(-${currentMusicSection * 100}vw)` }}
        >
          {/* Music Hero Section */}
          <div className="music-section-page">
            <section className="music-hero">
              <div className="container">
                <div className="music-hero-content">
                  <div className="music-hero-text">
                    <h1 className="music-hero-title">
                      Welcome to my <span className="highlight">Music World</span>
                    </h1>
                    <h2 className="music-hero-subtitle">
                      Electronic Music Producer & Sound Designer
                    </h2>
                    <p className="music-hero-description">
                      When I'm not coding, I create electronic music that blends ambient soundscapes 
                      with modern production techniques. My music explores the relationship between 
                      technology and human emotion.
                    </p>
                    <div className="music-hero-buttons">
                      <button className="btn btn-primary">
                        Listen on Spotify
                      </button>
                      <button className="btn btn-secondary">
                        View SoundCloud
                      </button>
                    </div>
                  </div>
                  <div className="music-hero-visual">
                    <div className="music-visualizer">
                      <div className="visualizer-bar"></div>
                      <div className="visualizer-bar"></div>
                      <div className="visualizer-bar"></div>
                      <div className="visualizer-bar"></div>
                      <div className="visualizer-bar"></div>
                      <div className="visualizer-bar"></div>
                      <div className="visualizer-bar"></div>
                      <div className="visualizer-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Music Projects Section */}
          <div className="music-section-page">
            <section className="music-projects">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">Musical Projects</h2>
                  <p className="section-subtitle">Albums, EPs, and singles</p>
                </div>
                
                <div className="music-projects-grid">
                  {musicProjects.map((project, index) => (
                    <div key={index} className="music-project-card">
                      <div className="music-project-image">
                        <div className="music-album-art">
                          <div className="album-placeholder">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                              <circle cx="12" cy="12" r="10"/>
                              <circle cx="12" cy="12" r="3"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="music-project-content">
                        <h4 className="music-project-title">{project.title}</h4>
                        <p className="music-project-genre">{project.genre} • {project.year}</p>
                        <p className="music-project-description">{project.description}</p>
                        <a href={project.link} className="music-project-link">Listen Now</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Music Contact Section */}
          <div className="music-section-page">
            <section className="music-contact">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">Let's Collaborate</h2>
                  <p className="section-subtitle">Interested in music production or sound design?</p>
                </div>
                
                <div className="music-contact-content">
                  <div className="music-contact-info">
                    <h3>Music & Sound Design Services</h3>
                    <p>
                      I offer custom music production, sound design for applications, 
                      and ambient soundscapes for various projects. Let's create something amazing together.
                    </p>
                    
                    <div className="music-platforms">
                      <h4>Find My Music</h4>
                      <div className="platform-links">
                        <button className="platform-link" onClick={() => window.open('https://spotify.com', '_blank')}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                          <span>Spotify</span>
                        </button>
                        <button className="platform-link" onClick={() => window.open('https://soundcloud.com', '_blank')}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                          <span>SoundCloud</span>
                        </button>
                        <button className="platform-link" onClick={() => window.open('https://bandcamp.com', '_blank')}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                          <span>Bandcamp</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicWorld;
