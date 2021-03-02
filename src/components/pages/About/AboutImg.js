import React from 'react';
import { Animated } from 'react-animated-css';
import { aboutPageImg } from '../../../assets/imgUrl';

const AboutImg = () => {
  return (
    <Animated
      animationIn='fadeIn'
      animationOut='fadeOut'
      animationInDelay={500}
    >
      <div className='aboutImg-layout'>
        <div>
          <img
            src={aboutPageImg}
            className='about-img'
            alt='Developer Waving'
          />
        </div>
        <div className='pa1 social'>
          <h2 className='animated pulse infinite tc '>Get in Touch</h2>
          <hr className='mw3 bb bw1 b--black-10 about-hr'></hr>
          <div className='tc'>
            <a
              className='link dim black h2 w2 mr2'
              href='https://linkedin.com/in/ysherqawi'
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
