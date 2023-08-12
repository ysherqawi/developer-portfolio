import React from 'react';
import { Animated } from 'react-animated-css';
import backIcon from '../../../assets/backend.png';
import '../../styles/Skills/Skills.css';

const BackSkills = () => (
  <Animated animationIn='fadeIn' animationOut='fadeOut' animationInDelay={500}>
    <article
      className='skills-card 
        mw5 mh2 grow bg-white br3 pa3 pa4-ns mv3 ba b--black-10'
    >
      <div className='tc'>
        <h3>
          <img src={backIcon} class='skills-icon' alt='backend logo' /> Backend
        </h3>
        <hr className='mw3 bb bw1 b--black-10' />
      </div>
      <div className='cursor'>
        <span className='f5 db black link hover-dark-green pv1'>
          <i class='fab fa-node' /> Node.js
        </span>
        <span className='f5 db black link hover-gray pv1'>
          <i className='fab fa-node-js' /> Express.js
        </span>
        <span className='f5 db black link hover-gray pv1'>
          <i className='fab fa-node-js' /> Nest.js
        </span>
        <span className='f5 db black link hover-green pv1'>
          <i class='fab fa-envira' /> MongoDB
        </span>
        <span className='f5 db black link hover-dark-red pv1'>
          <i class='fas fa-database' /> Mongoose
        </span>
        <span className='f5 db black link hover-dark-blue pv1'>
          <i class='fas fa-database' /> PostgreSQL
        </span>
        <span className='f5 db black link hover-dark-blue pv1'>
          <i class='fas fa-database' /> MySQL
        </span>
      </div>
    </article>
  </Animated>
);

export default BackSkills;
