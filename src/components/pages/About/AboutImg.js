import React from 'react';
import { Animated } from 'react-animated-css';
import { AboutStyle } from './../../styles/About/About';
import { aboutPageImg } from '../../../assets/imgUrl';

const AboutImg = () => {
  return (
    <Animated animationIn='fadeInLeftBig' animationOut='zoomOutDown'>
      <div className='aboutImg'>
        <div>
          <img
            src={aboutPageImg}
            style={AboutStyle.img}
            alt='Developer Waving'
          />
        </div>
        <div className='pa1 social'>
          <h2 className='animated pulse infinite tc '>Get in Touch</h2>
          <hr className='mw3 bb bw1 b--black-10' style={AboutStyle.hr}></hr>
          <div className='tc'>
            <a
              className='link dim black h2 w2 mr2'
              href='https://linkedin.com/in/yassersherqawi'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-2x grow' />
            </a>
            <a
              className='link dim black h2 w2 mr2'
              href='https://github.com/ysherqawi'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github fa-2x grow' />
            </a>
            <a
              className='link dim black h2 w2'
              href='mailto:ysherqawi@gmail.com'
            >
              <i className='fab fa-google fa-2x grow' />
            </a>
          </div>
        </div>
      </div>
      <hr className='mw6 bb bw1 b--black-10 break'></hr>
    </Animated>
  );
};

export default AboutImg;
