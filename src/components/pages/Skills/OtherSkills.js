import React from 'react';
import { Animated } from 'react-animated-css';
import otherIcon from '../../../assets/other.png';
import { SkillsStyle } from './../../styles/Skills/Skills';

const OtherSkills = () => (
  <Animated
    animationIn='fadeInRightBig'
    animationOut='zoomOutDown'
    isVisible={true}
  >
    <article
      className='mw5 mh2 grow bg-white br3 pa3 pa4-ns mv3 ba b--black-10'
      style={SkillsStyle.card}
    >
      <div className='tc'>
        <h3>
          <img
            src={otherIcon}
            style={SkillsStyle.icon}
            alt='other skills logo'
          />{' '}
          Other
        </h3>
        <hr className='mw3 bb bw1 b--black-10' />
      </div>
      <div style={SkillsStyle.cursor}>
        <span className='f5 db black link hover-orange pv1'>
          <i className='fab fa-git' /> GIT
        </span>
      </div>
    </article>
  </Animated>
);

export default OtherSkills;
