import React from 'react';
import AboutImg from './AboutImg';
import AboutStory from './AboutStory';
import { AboutStyle } from './../../styles/About/About';
import '../../styles/About/About.css';

const About = () => {
  return (
    <div className='about' style={AboutStyle.layout}>
      <AboutImg />
      <AboutStory />
    </div>
  );
};

export default About;
