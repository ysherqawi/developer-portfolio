import React from 'react';
import { Animated } from 'react-animated-css';
import LandingImg from '../../assets/landing.gif';
import Typewriter from 'typewriter-effect';
import { HomeStyle } from '../styles/Home';

const Home = () => {
  return (
    <div id='home-page' className=' mw7 br3 pa2 mv2' style={HomeStyle.landing}>
      <div>
        <Animated
          animationIn='fadeInRight'
          isVisible={true}
          animationInDelay={500}
        >
          <h1 style={HomeStyle.textStyle}>
            <Typewriter
              options={{
                strings: [
                  `Hello,`,
                  `I'm Yasser Sherqawi`,
                  `I'm a Web Developer`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </Animated>
        <Animated animationIn='shake'>
          <img id='landing-img' src={LandingImg} alt='Developer Gif' />
        </Animated>
      </div>
    </div>
  );
};

export default Home;
