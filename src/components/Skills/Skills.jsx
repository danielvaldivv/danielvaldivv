import React from 'react'

import dataSkills from './dataSkills'

import './Skills.css'

function Skills() {
  const data = dataSkills.skills;

  return (
    <section className="skills">
      <h2 className="skills__tittle">Tech Skills</h2>
      <section className="Section__grid">
        {
          data.map((item) => (
            <div key={item.id}>
              <a target="_blank" rel="noreferrer" href={item.url}>
                <figure>
                  <img src={item.icon} alt={item.title}/>
                  <figcaption>
                    <p>{item.title}</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          ))
        }
      </section>
    </section>
  )
}

export default Skills
