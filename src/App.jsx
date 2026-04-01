import { useState, useEffect } from 'react';
import BubbleMenu from './components/BubbleMenu';
import Home from './components/Home';
import Principles from './components/Principles';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contributions from './components/Contributions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LetterGlitch from './components/LetterGlitch';
import './App.css';

function App() {

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* LetterGlitch Background */}
      <div className="fixed inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <BubbleMenu 
          logo={<span style={{ fontWeight: 700, color: '#22c55e', fontSize: '1.5rem' }}>HS</span>}
          menuBg="#000000"
          menuContentColor="#22c55e"
        />
        <Home />
        <Principles />
        <Projects />
        <Technologies />
        <Contributions />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
