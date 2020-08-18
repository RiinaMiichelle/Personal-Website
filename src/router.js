import React from 'react';
import { Switch, Route } from 'react-router';
import Projects from './Components/Projects.jsx';
import PersonalWebsite from './Components/PersonalWebsite';
import Resume from './Components/Resume';



const Router = (props) => {
  return (
      <Switch>
          <Route path="/" component={PersonalWebsite} exact />
          <Route path="/home" component={PersonalWebsite} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
      </Switch>
  );
};

export default Router;