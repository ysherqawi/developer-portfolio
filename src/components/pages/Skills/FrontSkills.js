import React from "react";
import { Animated } from "react-animated-css";
import frontIcon from "../../../assets/frontend.png";
import "../../styles/Skills/Skills.css";

const FrontSkills = () => (
  <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={500}>
    <article className="skills-card mw5 mh2 grow bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h3>
          <img
            src={frontIcon}
            className="skills-icon"
            alt="front-end space logo"
          />{" "}
          Frontend
        </h3>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <div className="cursor">
        <span className="f5 db black link hover-orange pv1">
          <i className="fab fa-html5" /> HTML
        </span>
        <span className="f5 db black link hover-dark-blue pv1">
          <i className="fab fa-css3-alt" /> CSS
        </span>
        <span className="f5 db black link hover-yellow pv1">
          <i className="fab fa-js-square" /> JavaScript
        </span>
        <span className="f5 db black link hover-pink pv1">
          <i className="fab fa-sass" /> SASS
        </span>
        <span className="f5 db black link hover-purple pv1">
          <i className="fab fa-bootstrap" /> Bootstrap
        </span>
        <span className="f5 db black link hover-blue pv1">
          <i className="fab fa-react" /> React.js
        </span>
        <span className="f5 db black link hover-light-blue pv1">
          <i className="fab fa-react" /> React Native
        </span>
      </div>
    </article>
  </Animated>
);

export default FrontSkills;
