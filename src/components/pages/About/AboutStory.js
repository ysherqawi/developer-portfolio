import React from 'react';
import { Animated } from 'react-animated-css';
import '../../styles/About/About.css';

const AboutStory = () => {
  return (
    <article className='mw7 center pa4-ns'>
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationInDelay={500}
      >
        <div>
          <h2>About Me</h2>
          <p>
            Hey, my name is Yasser Sherqawi. I am a developer, currently
            pursuing my master's degree majoring in web sciences. I am
            passionate about web development, creating effective solutions, and
            learning every day to grow professionally in the IT field.
          </p>

          <p>
            When I'm not coding, you'll find me playing video games , watching
            football, listening to music or watching movies.
          </p>

          <p>
            I am available for any kind of job opportunity that suits my
            interests. Feel free to contact me at any time.
          </p>
        </div>
        <div>
          <hr className='mw6 bb bw1 b--black-10 about-hr2'></hr>
          <h2>Education </h2>
          <p>
            <i className='fas fa-graduation-cap' /> Master's in Web Sciences -
            Current
          </p>
          <p>
            <i className='fas fa-graduation-cap' /> Bachelor's in Information
            Technology - Graduated
          </p>
        </div>
        <a
          className='f6 link dim grow no-underline br-pill ph3 pv2 mb2 mt2 dib white bg-dark-gray'
          href='https://drive.google.com/file/d/1ykxib2N823yw1oJzpBtbRTrvFez_IZW5/view?usp=sharing'
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
