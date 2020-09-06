import React from 'react';
import { Animated } from 'react-animated-css';
import otherIcon from '../../../assets/other.png';
import postman from '../../../assets/postman.svg';
import '../../styles/Skills/Skills.css';

const OtherSkills = () => (
  <Animated
    animationIn='fadeInRightBig'
    animationOut='zoomOutDown'
    animationInDelay={500}
  >
    <article className='skills-card mw5 mh2 grow bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
      <div className='tc'>
        <h3>
          <img
            src={otherIcon}
            className='skills-icon'
            alt='other skills logo'
          />{' '}
          Other
        </h3>
        <hr className='mw3 bb bw1 b--black-10' />
      </div>
      <div className='cursor'>
        <span className='f5 db black link hover-orange pv1'>
          <i className='fab fa-git' /> GIT
        </span>
        <span className='f5 db black link hover-dark-red pv1'>
          <i class='fab fa-npm' /> NPM
        </span>
        <span className='f5 db black link hover-gray pv1'>
          <img src={postman} alt='postman' className='postman-icon' /> Postman
        </span>
      </div>
    </article>
  </Animated>
);

export default OtherSkills;
