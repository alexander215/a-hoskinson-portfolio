import React from 'react';
import './style.css';
import IntroHeader from '../IntroHeader';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Experience from '../Experience';
import Education from '../Education';
import NavBar from '../NavBar';
import Contact from '../Contact';
import ComingSoon from '../ComingSoon';
import { AppLayout } from './style';
import HomePage from '../HomePage';

function App() {
  return (
      <AppLayout>
        <NavBar />
        <HomePage />
      </AppLayout>
  );
}

export default App;
