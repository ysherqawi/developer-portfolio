import React from 'react';
import projects from '../../../data/projectsData';
import ProjectItem from './ProjectItem';
import { ProjectsStyle } from './../../styles/Projects/Projects';
import '../../styles/Projects/Projects.css';

export const Projects = () => (
  <div className='layout' style={ProjectsStyle.layout}>
    {projects.map((project) => (
      <ProjectItem project={project} />
    ))}
  </div>
);

export default Projects;
