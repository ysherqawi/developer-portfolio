import React from 'react';
import { Animated } from 'react-animated-css';
import Typewriter from 'typewriter-effect';
import { homePageImg } from '../../../assets/imgUrl';
import '../../styles/Home/Home.css';

const Home = () => (
  <div className='mw8 br3 pt3 home-layout'>
    <Animated
      animationIn='fadeInRightBig'
      animationOut='zoomOutDown'
      animationInDelay={500}
    >
      <h1 className='tc f1 mb4 header-text'>
        <Typewriter
          options={{
            strings: [
              `Hello <i class="far fa-grin"/>`,
              `I'm Yasser Sherqawi`,
              `I'm a Web Developer`,
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </Animated>

    <Animated
      animationIn='shake'
      animationOut='zoomOutDown'
      animationInDelay={1400}
    >
      <img className='landing-img' src={homePageImg} alt='Developer Gif' />
    </Animated>
  </div>
);

export default Home;
