import React from 'react';
import FrontSkills from './FrontSkills';
import BackSkills from './BackSkills';
import OtherSkills from './OtherSkills';
import { SkillsStyle } from '../../styles/Skills/Skills';
import { Animated } from 'react-animated-css';
import '../../styles/Skills/Skills.css';
const Skills = () => {
  return (
    <div className='pt5'>
      <Animated
        animationIn='fadeInDownBig'
        animationOut='zoomOutDown'
        isVisible={true}
        animationInDelay={10}
      >
        <article
          className='bg-white br3 mt5-ns center w-80 skills-img'
          style={SkillsStyle.backgroundimg}
        ></article>
      </Animated>
      <Animated animationIn='fadeInDownBig'>
        <h2 className='tc mt5-ns pt4'>My Skills </h2>
        <hr
          className='mw5 bb bw1 b--black-10'
          style={{ marginBottom: '40px', marginTop: '40px' }}
        ></hr>
      </Animated>
      <div style={SkillsStyle.layout} className='skills'>
        <FrontSkills />
        <BackSkills />
        <OtherSkills />
      </div>
    </div>
  );
};

export default Skills;
