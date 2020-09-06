import React from 'react';
import { Animated } from 'react-animated-css';
import projects from '../../../data/projectsData';
import ProjectItem from './ProjectItem';
import ProjectsLink from './ProjectsLink';
import '../../styles/Projects/Projects.css';

const Projects = () => (
  <Animated
    animationIn='fadeInUpBig'
    animationOut='zoomOutDown'
    animationInDelay={500}
  >
    <div className='projects-layout'>
      <div className='projects-layout mt4'>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.name} />
        ))}
      </div>
      <ProjectsLink />
    </div>
  </Animated>
);

export default Projects;
