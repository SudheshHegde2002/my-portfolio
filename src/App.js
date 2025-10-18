import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import MusicWorld from './components/MusicWorld';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentWorld, setCurrentWorld] = useState('coding'); // 'coding' or 'music'
  const [currentSection, setCurrentSection] = useState(0); // 0: Hero, 1: About, 2: Experience, 3: Contact
  const musicNavigateRef = useRef(null);

  const sections = ['hero', 'about', 'experience', 'contact'];
  const musicSections = ['hero', 'projects', 'contact']; // Music world sections

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    // Add keyboard navigation
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        handleSwipe('right');
      } else if (e.key === 'ArrowRight') {
        handleSwipe('left');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSection, currentWorld]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  const toggleWorld = () => {
    setCurrentWorld(currentWorld === 'coding' ? 'music' : 'coding');
    setCurrentSection(0); // Reset to first section when switching worlds
  };

  const navigateToSection = (sectionIndex) => {
    if (currentWorld === 'coding') {
      setCurrentSection(sectionIndex);
    } else if (currentWorld === 'music' && musicNavigateRef.current) {
      musicNavigateRef.current(sectionIndex);
    }
  };

  const handleNavigateToMusicSection = (navigateFn) => {
    musicNavigateRef.current = navigateFn;
  };

  const handleSwipe = (direction) => {
    if (currentWorld === 'coding') {
      if (direction === 'left' && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (direction === 'right' && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    } else if (currentWorld === 'music' && musicNavigateRef.current) {
      // Get current music section from the ref
      // This is handled by MusicWorld's internal state
    }
  };

  return (
    <div className="App">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        currentWorld={currentWorld}
        toggleWorld={toggleWorld}
        currentSection={currentSection}
        navigateToSection={navigateToSection}
        sections={currentWorld === 'coding' ? sections : musicSections}
      />
      {currentWorld === 'coding' ? (
        <div className="horizontal-container">
          <div 
            className="sections-wrapper"
            style={{ transform: `translateX(-${currentSection * 100}vw)` }}
          >
            <div className="section-page">
              <Hero navigateToSection={navigateToSection} />
            </div>
            <div className="section-page">
              <About />
            </div>
            <div className="section-page">
              <Experience />
            </div>
            <div className="section-page">
              <Contact />
            </div>
          </div>
        </div>
      ) : (
        <MusicWorld navigateToMusicSection={handleNavigateToMusicSection} />
      )}
    </div>
  );
}

export default App;
