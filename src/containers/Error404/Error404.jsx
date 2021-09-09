import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.styl'

import arrowLeft from '../../assets/icons/arrow-left.png'

function Error404() {
  return (
    <div className="Error404">
      <h3>Ups... This page does´t exist</h3>
      <h1>404</h1>
      <h2>Not Found</h2>
      <h3>Click here and go back</h3>
      <Link to="/"><img  src={arrowLeft} alt="Arrow come back" width="50px" height="auto" /></Link>
    </div>
  )
}

export default Error404
