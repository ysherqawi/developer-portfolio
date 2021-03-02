import React from 'react';
import { Animated } from 'react-animated-css';
// import Typewriter from 'typewriter-effect';
import { homePageImg } from '../../../assets/imgUrl';
import '../../styles/Home/Home.css';

const Home = () => (
  <div className='mw8 br3 pt3 home-layout'>
    <Animated
      animationIn='fadeIn'
      animationOut='fadeOut'
      animationInDelay={500}
    >
      <h1 className='tc f1 mb4 header-text'>
        {/* <Typewriter
          options={{
            strings: [`Hi all <i class="far fa-grin"/>`, `I'm Yasser`],
            autoStart: true,
            loop: true,
          }}
        /> */}
        Hi all, I'm Yasser
        <span role='img' aria-label='waving hand' className='wave-emoji'>
          👋
        </span>
      </h1>
    </Animated>

    <Animated
      animationIn='fadeIn'
      animationOut='fadeOut'
      animationInDelay={500}
    >
      <img className='landing-img' src={homePageImg} alt='Developer Gif' />
    </Animated>
  </div>
);

export default Home;
