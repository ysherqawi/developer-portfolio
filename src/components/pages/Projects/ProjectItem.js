import React from 'react';
import PropTypes from 'prop-types';
import { defaultProjectImg } from './../../../assets/imgUrl';
import '../../styles/Projects/Projects.css';

const ProjectItem = ({ project }) => (
  <div className='card br2 ba dark-gray b--black-10 mv4 w-100 center grow'>
    {!project.image ? (
      <img
        src={defaultProjectImg}
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
    <div className='projects-linkgroup'>
      {project.live.length > 0 && (
        <a
          className='f6 link dim  no-underline br-pill ph2 pv2 mb2 ml1 dib white bg-black center'
          href={project.live}
          target='_blank'
          rel='noopener noreferrer'
        >
          Live <i className='fab fa-github ' />
        </a>
      )}
      <a
        className='f6 link dim  no-underline br-pill ph2 pv2 mb2 ml1 dib white bg-black center'
        href={project.github}
        target='_blank'
        rel='noopener noreferrer'
      >
        Github <i className='fab fa-github ' />
      </a>
    </div>
  </div>
);

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
