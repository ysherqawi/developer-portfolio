import React from 'react';
import { Animated } from 'react-animated-css';
import backIcon from '../../../assets/backend.png';
import { SkillsStyle } from './../../styles/Skills/Skills';

const BackSkills = () => (
  <Animated
    animationIn='fadeInUpBig'
    animationOut='zoomOutDown'
    isVisible={true}
  >
    <article
      className='mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10'
      style={SkillsStyle.card}
    >
      <div className='tc'>
        <h3>
          <img src={backIcon} style={SkillsStyle.icon} alt='backend logo' />{' '}
          Backend
        </h3>
        <hr className='mw3 bb bw1 b--black-10' />
      </div>
      <div style={SkillsStyle.cursor}>
        <span className='f5 db black link hover-dark-green pv1'>
          <i class='fab fa-node-js' /> Node.js
        </span>
        <span className='f5 db black link hover-green pv1'>
          <i class='fas fa-database' /> MongoDB
        </span>
      </div>
    </article>
  </Animated>
);

export default BackSkills;
