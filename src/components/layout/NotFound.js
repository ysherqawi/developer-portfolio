import React from 'react';
import Image404 from '../../assets/404.gif';
import { Link } from 'react-router-dom';
import { NotFoundStyle } from './../styles/NotFound/NotFound';
import './../styles/NotFound/NotFound.css';

const NotFound = () => {
  return (
    <div style={NotFoundStyle}>
      <img src={Image404} alt='not found' />
      <Link
        class='f6 link dim grow no-underline br-pill ph3 pv3 mt2 dib white bg-dark-gray btn'
        to='/'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
