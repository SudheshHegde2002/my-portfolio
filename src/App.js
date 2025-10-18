import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicWorld from './components/MusicWorld';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentWorld, setCurrentWorld] = useState('coding'); // 'coding' or 'music'

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  const toggleWorld = () => {
    setCurrentWorld(currentWorld === 'coding' ? 'music' : 'coding');
  };

  return (
    <div className="App">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        currentWorld={currentWorld}
        toggleWorld={toggleWorld}
      />
      {currentWorld === 'coding' ? (
        <>
          <Hero />
          <About />
          <Experience />
          <Contact />
        </>
      ) : (
        <MusicWorld />
      )}
      <Footer />
    </div>
  );
}

export default App;
