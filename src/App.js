import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './components/styles/App.css';

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Navbar />
    </div>
    ;
  </BrowserRouter>
);

export default App;
