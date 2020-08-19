import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { NavbarStyle } from './../styles/Navbar/Navbar';

const Navbar = () => {
  return (
    <nav className='db dt-l w-100 pa3 ph5-l bg-white' style={NavbarStyle}>
      <Link
        className='db dtc-l v-mid link dim w-100 w-25-l tc tl-l mb3 mb0-l'
        to='/'
        title='Home'
      >
        <img src={Logo} className='dib w2 h2 br-100' alt='logo' />
      </Link>
      <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
        <Link
          className='link dim black  f6 f5-l dib mr3 mr4-l '
          to='/about'
          title='About'
        >
          About Me
        </Link>
        <Link
          className='link dim black  f6 f5-l dib mr3 mr4-l'
          to='/skills'
          title='Skills'
        >
          Skills
        </Link>
        <Link
          className='link dim black f6 f5-l dib mr3 mr4-l'
          to='/projects'
          title='Projects'
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
