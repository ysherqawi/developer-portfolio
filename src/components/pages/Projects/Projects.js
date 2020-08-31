import React from 'react';
import projects from '../../../data/projectsData';
import ProjectItem from './ProjectItem';
import { ProjectsStyle } from './../../styles/Projects/Projects';
import '../../styles/Projects/Projects.css';

const Projects = () => (
  <div className='layout mt4' style={ProjectsStyle.layout}>
    {projects.map((project) => (
      <ProjectItem project={project} key={project.name} />
    ))}
  </div>
);

export default Projects;
