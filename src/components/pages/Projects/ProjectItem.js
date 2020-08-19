import React from 'react';
import PropTypes from 'prop-types';
import { ProjectsStyle } from './../../styles/Projects/Projects';
import { Animated } from 'react-animated-css';
import defaultImg from '../../../assets/default.jpg';
import '../../styles/Projects/Projects.css';

const ProjectItem = ({ project }) => (
  <Animated animationIn='fadeInUpBig' animationOut='zoomOutDown'>
    <article
      className='card br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center grow'
      style={ProjectsStyle.card}
    >
      {!project.image ? (
        <img
          src={defaultImg}
          className='db  w-100 br2 br--top project-img'
          alt='project pic'
        />
      ) : (
        <img
          src={project.image}
          className='db  w-100 br2 br--top project-img'
          alt='project pic'
        />
      )}

      <div className='pa2 ph3-ns pb3-ns'>
        <div className='dt w-100 mt1'>
          <div className='dtc'>
            <h2 className='f5 f4-ns mv0 heading'>{project.name}</h2>
          </div>
          <div className='dtc tr'>
            <h3 className='f5 mv0 heading'>{project.type}</h3>
          </div>
        </div>
        <p className='f6 lh-copy measure mt3 mid-gray desc'>
          {project.description}
        </p>
      </div>
      <div style={ProjectsStyle.linkGroup}>
        {project.live.length > 0 && (
          <a
            className='f6 link dim grow no-underline br-pill ph2 pv2 mb2 ml1 dib white bg-black center'
            href='https://www.google.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live <i className='fab fa-github ' />
          </a>
        )}
        <a
          className='f6 link dim grow no-underline br-pill ph2 pv2 mb2 ml1 dib white bg-black center'
          href='https://www.github.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github <i className='fab fa-github ' />
        </a>
      </div>
    </article>
  </Animated>
);

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
