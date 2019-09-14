import React from 'react';
import './style.css';
import IntroHeader from '../IntroHeader';
import Projects from '../Projects';
import Skills from '../Skills';
import Experience from '../Experience';
import Education from '../Education';
import Contact from '../Contact';

function App() {
  return (
    <div className="App">
      <IntroHeader />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
