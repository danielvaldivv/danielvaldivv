import React from 'react'

import Project from '../Project/Project';

import dataProjects from './dataProjects'

const Projects = () => {
  const data = dataProjects.projects

  return (
    <section className="Projects">
      <h1>Projects</h1>
      {data.map(element => (
        <Project
          key={element.id}
          project={element.id}
        />
      ))}
    </section>
  )
}
export default Projects
