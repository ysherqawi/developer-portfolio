import React from 'react';
import AboutImg from './AboutImg';
import AboutStory from './AboutStory';
import '../../styles/About/About.css';

const About = () => {
  return (
    <div className='about-layout'>
      <AboutImg />
      <AboutStory />
    </div>
  );
};

export default About;
