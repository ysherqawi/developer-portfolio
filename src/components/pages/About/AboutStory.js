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
            A curious learner and result-oriented individual interested in the role of a software developer,
            where I can expand and apply the skills and knowledge acquired through continuous personal
            development to design and create quality software solutions that contribute towards achieving the
            company’s vision and goals.
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
          href=''
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
