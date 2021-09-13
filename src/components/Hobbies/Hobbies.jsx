import React, { useState } from 'react'

import Paintings from '../Paintings/Paintings'
import Reading from '../Reading/Reading'

import arrowDeployIcon from '../../assets/icons/arrow-left.png'

import './Hobbies.styl'

const Hobbies = () =>{
  // Render Elements
  const paintings = () => (<Paintings/>)
  const reading = () => (<Reading/>)
  const cooking = () => (
    <h1>cooking</h1>
  )
  const sports = () => (
    <h1>sports</h1>
  )

  const [hobbyVisible, setHobbyVisible] = useState(paintings)


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
        <h4 className="Painting-title">
          Paintings
          <button
            className="arrowButton"
            type="button"
            onClick={deployPaintings} >
            <img src={arrowDeployIcon} alt="Arrow"/>
          </button>
        </h4>
        <h4 className="Reading-title">
          Reading
          <button
          className="arrowButton"
          type="button"
          onClick={deployReading}
          >
            <img src={arrowDeployIcon} alt="Arrow"/>
          </button>
        </h4>
        <h4 className="Cooking-title">
          Cooking
          <button
          className="arrowButton"
          type="button"
          onClick={deployCooking}
        >
            <img src={arrowDeployIcon} alt="Arrow"/>
          </button>
        </h4>
        <h4 className="Sports-title">
          Sports
          <button
          className="arrowButton"
          type="button"
          onClick={deploySports}
        >
            <img src={arrowDeployIcon} alt="Arrow"/>
          </button>
        </h4>
        <div className="Hobbies-table">
          {hobbyVisible}
        </div>
      </section>
    </section>
  )
}
export default Hobbies
