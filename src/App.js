import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './components/styles/App.css';
import Home from './components/pages/Home';

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
