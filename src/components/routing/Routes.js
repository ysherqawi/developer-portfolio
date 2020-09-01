import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './../pages/About/About';
import Skills from './../pages/Skills/Skills';
import Projects from './../pages/Projects/Projects';
import NotFound from './../layout/NotFound';
import Home from './../pages/Landing/Home';
import '../styles/Routing/Routing.css';

const Routes = () => {
  return (
    <div className='wrapper'>
      <Switch>
        <Route path='/about' exact component={About} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/' exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
