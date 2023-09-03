import React from "react";
import FooterLogo from "../../assets/footer.png";
import "../styles/Footer/Footer.css";
import { getToday } from "./../../utils/date";
import { generateRandomQute } from "./../../utils/qutes";

const Footer = () => (
  <footer className="footer-layout pt2 ph3 ph5-ns mt2 tc">
    <small className="f6 b db mb1 tc"> {generateRandomQute()}</small>

    <img src={FooterLogo} alt="logo" className="footer-logo" />
  </footer>
);

export default Footer;
