import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './components/styles/App.css';
import Routes from './components/routing/Routes';

const App = () => (
  <>
    <Navbar />
    <Route component={Routes} />
    <Footer />
  </>
);

export default App;
