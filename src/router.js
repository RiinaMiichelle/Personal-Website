import React from 'react';
import { Switch, Route } from 'react-router';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import PersonalWebsite from './Components/PersonalWebsite';



const Router = (props) => {
  return (
      <Switch>
          <Route path="/" component={PersonalWebsite} exact />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
      </Switch>
  );
};

export default Router;