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
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import TestCaseStudy from '../caseStudies/TestCaseStudy';

function App() {
  return (
      <AppLayout>
        <NavBar />
        <Switch>
          <HomePage exact path={ROUTES.HOME_PAGE} component={HomePage}/>
          <TestCaseStudy exact path={ROUTES.CASE_STUDY} component={TestCaseStudy} />
        </Switch>
      </AppLayout>
  );
}

export default App;
