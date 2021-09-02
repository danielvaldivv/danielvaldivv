import React from 'react'
import Intro from '../components/Intro'
import Description from '../components/Description'

import Avatar from '../assets/img/avatar.png'
import '../styles/Parallax.css'

function Parallax() {
  return (
    <main className="parallax-wraper">
        <div className="parallax-group intro-screen" id="intro">
            <Intro/>
        </div>

        <div className="parallax-group" id="group-one">
            <div className="parallax-layer base-layer">
                <img src={Avatar} alt="Avatar danielvaldivv" width="30%"/>
            </div>
            <div className="parallax-layer mid-layer">
              <Description/>
            </div>
        </div>

        <div className="parallax-group" id="group-two">
            <div className="parallax-layer mid-layer">
                <h2>Skills</h2>
            </div>
            {/* <div className="parallax-layer top-layer">
                <h4 className="aboutme-description">
                    At the end of 2020 I participated in the creation of a company that today seeks to improve peoples lifestyle through healthy and conscious eating. This project is financed with gastronomic products developed and produced by the company itself.
                </h4>
            </div> */}
        </div>

        <div className="parallax-group outroscreen" id="outro">
            <h2>Thanks for comming</h2>
        </div>
      </main>
  )
}

export default Parallax
