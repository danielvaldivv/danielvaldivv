import React, { useState } from 'react'

import dataProjects from '../Projects/dataProjects'

import previous from '../../assets/icons/previous.png'
import next from '../../assets/icons/next.png'

import '../Projects/Projects.styl'

const Project = ( {project} ) => {
  const data = dataProjects.projects[project]
  const [numberPicture, setNumberPicture] = useState(0)
  const lengthPictures = data.image.length - 1

  const previousPicture = () => (
    numberPicture > 0
      ? setNumberPicture( numberPicture -1 )
      : setNumberPicture(lengthPictures)
    )

  const nextPicture = () => (
    numberPicture < lengthPictures
      ? setNumberPicture( numberPicture +1 )
      : setNumberPicture(0)
    )

  return (
    <>
        <section className="Project">
          <div className="Project-description">
            <h2>{data.title}</h2>
            <h4>Technologies: {data.technologies}</h4>
            <h4>Description: {data.description}</h4>
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
    </>
  )
}

export default Project