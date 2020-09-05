import React from 'react';
import { notFoundImg } from '../../assets/imgUrl';
import '../styles/NotFound/NotFound.css';

const NotFound = () => {
  return (
    <div className='notfound-layout'>
      <img className='notfound-img' src={notFoundImg} alt='not found' />
    </div>
  );
};

export default NotFound;
