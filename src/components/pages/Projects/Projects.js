import React from 'react';
import projects from '../../../data/projectsData';
import ProjectItem from './ProjectItem';
import { ProjectsStyle } from './../../styles/Projects/Projects';
import '../../styles/Projects/Projects.css';
import { Animated } from 'react-animated-css';

const Projects = () => (
  <Animated animationIn='fadeInUpBig' animationOut='zoomOutDown'>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='layout mt4' style={ProjectsStyle.layout}>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.name} />
        ))}
      </div>
      <div>
        <a
          className='f4 link dim grow no-underline  mb3 mt3 dib black '
          href='https://github.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          More Projects <i class='fas fa-arrow-circle-right' />
        </a>
      </div>
    </div>
  </Animated>
);

export default Projects;
