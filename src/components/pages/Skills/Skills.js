import React from 'react';
import FrontSkills from './FrontSkills';
import BackSkills from './BackSkills';
import OtherSkills from './OtherSkills';
import { SkillsStyle } from '../../styles/Skills/Skills';
import { Animated } from 'react-animated-css';
import '../../styles/Skills/Skills.css';
const Skills = () => {
  return (
    <div className='pt2 mt2'>
      <Animated
        animationIn='fadeInDownBig'
        animationOut='zoomOutDown'
        isVisible={true}
        animationInDelay={10}
      >
        <article
          className='bg-white br3 mt4-ns center w-80 skills-img'
          style={SkillsStyle.backgroundimg}
        ></article>
      </Animated>
      <Animated animationIn='fadeInDownBig' animationOut='zoomOutDown'>
        <h2 className='tc mt2-ns pt3'>My Skills </h2>
        <hr className='mw5 bb bw1 b--black-10'></hr>
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
