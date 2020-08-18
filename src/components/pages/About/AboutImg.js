import React from 'react';
import { Animated } from 'react-animated-css';
import AboutImage from '../../../assets/about.gif';
import { AboutStyle } from './../../styles/About/About';

const AboutImg = () => {
  return (
    <Animated
      animationIn='fadeInLeftBig'
      animationOut='zoomOutDown'
      isVisible={true}
      animationInDelay={10}
    >
      <div className='about'>
        <div className='aboutImg'>
          <img src={AboutImage} style={AboutStyle.img} alt='Developer Waving' />
        </div>
        <div className='pa1 social'>
          <h2 className='animated pulse infinite ' style={AboutStyle.center}>
            Get in Touch
          </h2>
          <hr
            className='mw3 bb bw1 b--black-10'
            style={{ marginTop: '-15px' }}
          ></hr>
          <div style={AboutStyle.center}>
            <a class='link dim black h2 w2 ' href='#'>
              <i class='fab fa-linkedin fa-2x' />
            </a>
            <a class='link dim black  h2 w2' href='#'>
              <i class='fab fa-github fa-2x' />
            </a>
          </div>
        </div>
      </div>
      <hr className='mw6 bb bw1 b--black-10 break'></hr>
    </Animated>
  );
};

export default AboutImg;
