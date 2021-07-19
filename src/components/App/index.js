import React from 'react';
import './style.css';
import NavBar from '../NavBar';
import { AppLayout } from './style';
import HomePage from '../HomePage';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'


import EmailDeveloperCaseStudy from '../caseStudies/EmailDeveloperCaseStudy';
import ScrollToTop from '../ScrollToTop';

function App() {
  return (
      <AppLayout>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} component={HomePage}/>
          <Route exact path={ROUTES.EMAIL_DEVELOPER_CASE_STUDY} component={EmailDeveloperCaseStudy} />
        </Switch>
      </AppLayout>
  );
}

export default App;
