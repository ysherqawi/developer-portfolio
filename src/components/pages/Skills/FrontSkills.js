import React from 'react';
import { Animated } from 'react-animated-css';
import frontIcon from '../../../assets/frontend.png';
import { SkillsStyle } from './../../styles/Skills/Skills';

const FrontSkills = () => (
  <Animated
    animationIn='fadeInLeftBig'
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
            src={frontIcon}
            style={SkillsStyle.icon}
            alt='front-end space logo'
          />{' '}
          Frontend
        </h3>
        <hr className='mw3 bb bw1 b--black-10' />
      </div>
      <div style={SkillsStyle.cursor}>
        <span className='f5 db black link hover-orange pv1'>
          <i className='fab fa-html5' /> HTML
        </span>
        <span className='f5 db black link hover-dark-blue pv1'>
          <i className='fab fa-css3-alt' /> CSS
        </span>
        <span className='f5 db black link hover-yellow pv1'>
          <i className='fab fa-js-square' /> JavaScript (ES6)
        </span>
        <span className='f5 db black link hover-pink pv1'>
          <i className='fab fa-sass' /> SASS
        </span>
        <span className='f5 db black link hover-purple pv1'>
          <i className='fab fa-bootstrap' /> Bootstrap
        </span>

        <span className='f5 db black link hover-blue pv1'>
          <i className='fab fa-react' /> React.js
        </span>
      </div>
    </article>
  </Animated>
);

export default FrontSkills;
