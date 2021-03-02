import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Routes from './components/routing/Routes';
import Spinner from './components/layout/Spinner';

import './components/styles/App.css';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout();
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <Navbar />
      <Route component={Routes} />
      <Footer />
    </>
  );
};

export default App;
