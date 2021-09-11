import React, { useState } from "react"
import dataPaintings from "./dataPaintings"

import './Paintings.styl'

import previous from '../../assets/icons/previous.png'
import next from '../../assets/icons/next.png'

function Paintings() {
  const [numberPicture, setNumberPicture] = useState(0)
  const data = dataPaintings.paintings[numberPicture]

  const previousPicture = () => (
    numberPicture > 0
      ? setNumberPicture( numberPicture -1 )
      : setNumberPicture(2)
    )

  const nextPicture = () => (
    numberPicture < 2
      ? setNumberPicture( numberPicture +1 )
      : setNumberPicture(0)
    )

  return (
      <section className="Paintings-section">
        <section className="Painting">
          <div className="Painting-description">
            <h4>Title:{data.title}</h4>
            <p>Technique: {data.technique}</p>
          </div>
          <section className="Painting-pictures">
            <button type="button" onClick={previousPicture}>
              <img
                className="button-previous-next"
                src={previous} alt="Previous"
                />
            </button>
            <figure>
              <img className="Painting-picture" src={data.url} alt={data.title} />
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
  )
}

export default Paintings
