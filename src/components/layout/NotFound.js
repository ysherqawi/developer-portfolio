import React from 'react';
import { NotFoundStyle } from './../styles/NotFound/NotFound';
import { notFoundImg } from '../../assets/imgUrl';

const NotFound = () => {
  return (
    <div style={NotFoundStyle.layout}>
      <img style={NotFoundStyle.img} src={notFoundImg} alt='not found' />
    </div>
  );
};

export default NotFound;
