import React from 'react';
import Image404 from '../../assets/404.gif';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4rem',
      }}
    >
      <img src={Image404} alt='not found' />
    </div>
  );
};

export default NotFound;
