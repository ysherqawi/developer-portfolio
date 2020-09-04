import React from 'react';
import { Animated } from 'react-animated-css';
import { getToday } from './../../../utils/date';
import { AboutStyle } from './../../styles/About/About';

const AboutStory = () => {
  return (
    <article className='mw7 center pa3-ns'>
      <Animated animationIn='fadeInDownBig' animationOut='zoomOutDown'>
        <div>
          <h2>About Me</h2>
          <p>
            Hey, I am Yasser Sherqawi. I am a web developer currently living in
            Damascus, Syria. I am passionate about web development, creating
            effective solutions, and learning every day to grow professionally
            in the IT field.
          </p>

          <p>
            When I'm not coding, you'll find me playing video games , watching
            football, listening to music or watching movies.
          </p>

          <p>
            I am available for any kind of job opportunity that suits my
            interests. Feel free to contact me via email at any time.
          </p>
          <h4 style={AboutStyle.h4}>
            Happy {getToday()}! Wear a <i class='fas fa-head-side-mask' />. Save
            Lives.
          </h4>
        </div>
        <div>
          <hr className='mw6 bb bw1 b--black-10' style={AboutStyle.hr2}></hr>
          <h2>Education </h2>
          <p>
            <i className='fas fa-graduation-cap' /> Master's in Web Science -
            Current
          </p>
          <p>
            <i className='fas fa-graduation-cap' /> Bachelor's in Information
            Technology - Graduated
          </p>
        </div>
        <a
          className='f6 link dim grow no-underline br-pill ph3 pv2 mb2 mt2 dib white bg-dark-gray'
          href='https://drive.google.com/file/d/1ipPvNmfj3Whn1wrEZckOBXMqLd0-LwN3/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          Download My Resume <i className='fas fa-arrow-circle-down' />
        </a>
      </Animated>
    </article>
  );
};

export default AboutStory;
