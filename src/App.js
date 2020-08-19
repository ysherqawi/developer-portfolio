import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './components/styles/App.css';
import Home from './components/pages/Landing/Home';
import Footer from './components/layout/Footer';
import About from './components/pages/About/About';
import Skills from './components/pages/Skills/Skills';
import Projects from './components/pages/Projects/Projects';

const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>
);

export default App;
