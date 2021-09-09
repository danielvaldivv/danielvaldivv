import React, { useState } from 'react'

import dataProjects from './dataProjects'

import previous from '../../assets/icons/previous.png'
import next from '../../assets/icons/next.png'

import './Projects.styl'

const Projects = () => {
  const data = dataProjects.projects[0]
  const [numberPicture, setNumberPicture] = useState(0)

  const previousPicture = () => (
    numberPicture > 0
      ? setNumberPicture( numberPicture -1 )
      : setNumberPicture(5)
    )

  const nextPicture = () => (
    numberPicture < 5
      ? setNumberPicture( numberPicture +1 )
      : setNumberPicture(0)
    )

  return (
    <>
      <section className="Projects">
        <section className="Project">
          <div className="Project-description">
            <h2>{data.title}</h2>
            <h4>Technologies: {data.technologies}</h4>
            <h4>{data.description}</h4>
          </div>
          <section className="Project-pictures">
            <button type="button" onClick={previousPicture}>
              <img
                className="button-previous-next"
                src={previous} alt="Previous"
                />
            </button>
            <figure>
              <a target="_blank" rel="noreferrer" href={data.url}>
                <img className="Project-picture" src={data.image[numberPicture]} alt={data.title} />
              </a>
              <figcaption>
                <p>{data.url}</p>
              </figcaption>
            </figure>
            <button type="button" onClick={nextPicture}>
              <img
                className="button-previous-next"
                src={next}
                alt="Previous"
              />
            </button>
          </section>
        </section>
      </section>
    </>
  )
}

export default Projects
