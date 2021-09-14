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
    <>
      <h3>Self-taught cook, interested in improving my quality of life by taking care of the food I eat. </h3>
      <h3>Eating healthy doesn't have to be boring.</h3>
      <h3> I think about my health, I think about my future.</h3>
    </>
  )
  const sports = () => (
    <>
      <h3>Science has been proving for years that sport literally rejuvenates us. Dr. David Sinclair explains it very well.</h3>
      <h3>The fountain of youth is closer than we think. We just have to take action and leave the excuses behind.</h3>
    </>
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
