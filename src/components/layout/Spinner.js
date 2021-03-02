import React from 'react';

import { SpinnerImg } from '../../assets/imgUrl';
import '../styles/Spinner/Spinner.css';

const Spinner = () => (
  <div className='spinner-layout'>
    <img src={SpinnerImg} alt='loading...' className='spinner-img' />
  </div>
);

export default Spinner;
