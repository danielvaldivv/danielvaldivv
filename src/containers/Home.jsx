import React from 'react'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <main className="parallax-wraper">
      <div className="parallax-group intro-screen" id="intro">
          <h2>Welcome Im</h2>
          <h1>Daniel Rodrigo Valdivieso Merino</h1>
      </div>

      <div className="parallax-group" id="group-one">
          <div className="parallax-layer base-layer">
              <img src="../assets/img/avatar.png" alt="Avatar danielvaldivv"/>
          </div>
          <div className="parallax-layer mid-layer">
            <h2>Web Developer | Co-Founder: DALALÉ</h2>
              <h3>Student at Platzi</h3>
              <h3>Web Developer trainee</h3>
              <h3>-</h3>
              <h4>DALALÉ Director</h4>
          </div>
      </div>

      <div className="parallax-group" id="group-two">
          <div className="parallax-layer mid-layer">
              <h3>Science Lover and Tech Entusiast</h3>
          </div>
          <div className="parallax-layer top-layer">
              <h4 className="aboutme-description">
                  At the end of 2020 I participated in the creation of a company that today seeks to improve peoples lifestyle through healthy and conscious eating. This project is financed with gastronomic products developed and produced by the company itself.
              </h4>
              <h4 className="aboutme-description">
                  I have experience leading work teams since I was part of a research group while studying Mechanical Engineering at the Industrial University of Santander. Currently I am a team leader at DALALÉ gastronomy.
              </h4>
              <h4 className="aboutme-description">
                  Lately I am acquiring the necessary skills to be able to develop high quality websites in Platzi.
              </h4>
          </div>
      </div>
      <div className="parallax-group outroscreen" id="outro">
          <h2>Thanks for comming</h2>
      </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
