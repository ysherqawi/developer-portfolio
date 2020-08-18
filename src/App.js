import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './components/styles/App.css';
import Home from './components/pages/Landing/Home';
import Footer from './components/layout/Footer';
import About from './components/pages/About/About';

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
