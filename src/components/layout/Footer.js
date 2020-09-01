import React from 'react';
import { FooterStyle } from '../styles/Footer/Footer';
import '../styles/Footer/Footer.css';
import FooterLogo from '../../assets/footer.png';

const Footer = () => (
  <footer style={FooterStyle.footer} className='pt2 ph3 ph5-ns mt2 tc'>
    <small className='f5 db tc'>Copyright © 2020. All Rights Reserved</small>

    <img src={FooterLogo} alt='logo' style={FooterStyle.logo} />
  </footer>
);

export default Footer;
