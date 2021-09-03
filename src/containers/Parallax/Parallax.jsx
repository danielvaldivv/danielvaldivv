import React from 'react'
import Intro from '../../components/Intro/Intro'
import Description from '../../components/Description/Description'
import Skills from '../../components/Skills/Skills'
import Avatar from '../../components/Avatar/Avatar'
import Footer from '../../components/Footer/Footer'

import './Parallax.css'

function Parallax() {
  return (
    <>
      <section className="parallax-wraper">
        <div className=" intro-screen" id="intro">
            <Intro/>
        </div>

        <div className="parallax-group" id="group-one">
            <div className="parallax-layer base-layer">
                <Avatar/>
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
        <Footer/>
      </section>
    </>
  )
}

export default Parallax
