import React from 'react';
import FooterLogo from '../../assets/footer.png';
import '../styles/Footer/Footer.css';
import { getToday } from './../../utils/date';

const Footer = () => (
  <footer className='footer-layout pt2 ph3 ph5-ns mt2 tc'>
    <small className='f5 db mb1 tc'>
      {' '}
      Happy {getToday()}
    </small>

    <img src={FooterLogo} alt='logo' className='footer-logo' />
  </footer>
);

export default Footer;
