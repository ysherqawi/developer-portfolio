import React from 'react';
import { Animated } from 'react-animated-css';
import Typewriter from 'typewriter-effect';
import { HomeStyle } from '../../styles/Home/Home';
import '../../styles/Home/Home.css';
import { homePageImg } from '../../../assets/imgUrl';

const Home = () => (
  <div className='mw8 br3 pt3' style={HomeStyle.landing}>
    <Animated
      animationIn='fadeInRightBig'
      animationOut='zoomOutDown'
      animationInDelay={500}
    >
      <h1 className='tc f1 header-text'>
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

    <Animated animationIn='shake' animationOut='zoomOutDown'>
      <img
        className='landing-img'
        style={HomeStyle.LandingImg}
        src={homePageImg}
        alt='Developer Gif'
      />
    </Animated>
  </div>
);

export default Home;
