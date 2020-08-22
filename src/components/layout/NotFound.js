import React from 'react';
import Image404 from '../../assets/404.gif';
import { NotFoundStyle } from './../styles/NotFound/NotFound';

const NotFound = () => {
  return (
    <div style={NotFoundStyle.layout}>
      <img style={NotFoundStyle.img} src={Image404} alt='not found' />
    </div>
  );
};

export default NotFound;
