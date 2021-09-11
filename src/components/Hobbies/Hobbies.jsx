import React, { useState } from 'react'

import Paintings from '../Paintings/Paintings'

import arrowDeployIcon from '../../assets/icons/arrow-left.png'
import iconNext from '../../assets/icons/next.png'

import './Hobbies.styl'

const Hobbies = () =>{
  const [hobbyVisible, setHobbyVisible] = useState(null)

  // Render Elements
  const paintings = () => (
    <Paintings/>
  )
  const reading = () => (
    <img src={arrowDeployIcon} alt="reading"/>
  )
  const cooking = () => (
    <h1>cooking</h1>
  )
  const sports = () => (
    <h1>sports</h1>
  )

  // setState
  const deployPaintings = () => {
    setHobbyVisible(paintings)
  }
  const deployReading = () => {
    setHobbyVisible(reading)
  }
  const deployCooking = () => {
    setHobbyVisible(cooking)
  }
  const deploySports = () => {
    setHobbyVisible(sports)
  }


  return(
    <section className="Hobbies">
      <h1 className="Hobbies-title">Hobbies</h1>
      <section className="Hobbies-container">
        <h3 className="Painting-title">
          Paints
          <button
            className="arrowButton"
            type="button"
            onClick={deployPaintings} >
            <img src={arrowDeployIcon} alt="Arrow"/>
          </button>
        </h3>
        <h3 className="Reading-title">
          Reading
          <button
          className="arrowButton"
          type="button"
          onClick={deployReading}
          >
            <img src={arrowDeployIcon} alt="Arrow"/>
          </button>
        </h3>
        <h3 className="Cooking-title">
          Cooking
          <button
          className="arrowButton"
          type="button"
          onClick={deployCooking}
        >
            <img src={arrowDeployIcon} alt="Arrow"/>
          </button>
        </h3>
        <h3 className="Sports-title">
          Sports
          <button
          className="arrowButton"
          type="button"
          onClick={deploySports}
        >
            <img src={arrowDeployIcon} alt="Arrow"/>
          </button>
        </h3>
        <div className="Hobbies-table">
          {hobbyVisible}
        </div>
      </section>
    </section>
  )
}
export default Hobbies
