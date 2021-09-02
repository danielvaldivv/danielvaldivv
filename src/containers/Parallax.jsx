import React from 'react'
import Intro from '../components/Intro'
import Description from '../components/Description'
import Skills from '../components/Skills'

import Avatar from '../assets/img/avatar.png'
import '../styles/Parallax.css'

function Parallax() {
  return (
    <main className="parallax-wraper">
        <div className=" intro-screen" id="intro">
            <Intro/>
        </div>

        <div className="parallax-group" id="group-one">
            <div className="parallax-layer base-layer">
                <img className="avatar" src={Avatar} alt="Avatar danielvaldivv" width="30%"/>
            </div>
            <div className="parallax-layer mid-layer">
              <Description/>
            </div>
        </div>

        <div className="parallax-group" id="group-two">
            <div className="parallax-layer mid-layer">
              <Skills/>
            </div>
        </div>

        <div className="outroscreen" id="outro">
            <h2>Proyects</h2>
        </div>
      </main>
  )
}

export default Parallax
