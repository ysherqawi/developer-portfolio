import React from 'react';
import FrontSkills from './FrontSkills';
import BackSkills from './BackSkills';
import OtherSkills from './OtherSkills';
import { Animated } from 'react-animated-css';
import '../../styles/Skills/Skills.css';

const Skills = () => {
  return (
    <div className='pt2 mt2'>
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationInDelay={500}
      >
        <article className='bg-white br3 mt3-ns center skills-img'></article>
      </Animated>

      <div className='skills-layout'>
        <FrontSkills />
        <BackSkills />
        <OtherSkills />
      </div>
    </div>
  );
};

export default Skills;
