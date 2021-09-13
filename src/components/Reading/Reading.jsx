import React, { useState } from "react"
import dataReading from "./dataReading"

import './Reading.styl'

import previous from '../../assets/icons/previous.png'
import next from '../../assets/icons/next.png'

function Paintings() {
  const [numberPicture, setNumberPicture] = useState(0)
  const data = dataReading.books[numberPicture]

  const previousPicture = () => (
    numberPicture > 0
      ? setNumberPicture( numberPicture -1 )
      : setNumberPicture(4)
    )

  const nextPicture = () => (
    numberPicture < 4
      ? setNumberPicture( numberPicture +1 )
      : setNumberPicture(0)
    )

  return (
      <section className="Reading-section">
          <section className="Reading-books">
            <button type="button" onClick={previousPicture}>
              <img
                className="button-previous-next"
                src={previous} alt="Previous"
                />
            </button>
            <figure>
              <img className="Reading-book" src={data.url} alt={data.name} />
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
  )
}

export default Paintings
