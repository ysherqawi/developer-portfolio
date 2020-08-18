import React from 'react';
import { FooterStyle } from '../styles/Footer/Footer';
import '../styles/Footer/Footer.css';

const Footer = () => (
  <footer style={FooterStyle} class='pv4 ph3 ph5-ns tc'>
    <small class='f5 db tc'>Copyright © 2020. All Rights Reserved</small>

    <div>
      <a class='link dim black dib h2 w2 br-100  b--black-10' href='#'>
        <i class='fab fa-linkedin fa-2x' />
      </a>
      <a class='link dim black dib h2 w2 br-100 b--black-10' href='#'>
        <i class='fab fa-github fa-2x' />
      </a>
    </div>
  </footer>
);

export default Footer;
