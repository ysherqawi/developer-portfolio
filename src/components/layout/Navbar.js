import React from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import Logo from '../../assets/signture.svg';
import { NavbarStyle } from './../styles/Navbar/Navbar';
import './../styles/Navbar/Navbar.css';

const Navbar = () => {
  return (
    <Headroom>
      <nav className='db dt-l w-100 pa3 ph5-l bg-white'>
        <Link
          className='db dtc-l v-mid link dim w-100 w-25-l tc tl-l mb3 mb0-l'
          to='/'
          title='Home'
        >
          <img
            src={Logo}
            className='dib logo'
            alt='logo'
            style={NavbarStyle.logo}
          />
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
    </Headroom>
  );
};

export default Navbar;
