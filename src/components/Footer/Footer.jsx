import React from 'react'
import './Footer.css'
import Linkedin from '../../assets/icons/linkedin.svg'
import GitHub from '../../assets/icons/github.svg'
import Platzi from '../../assets/icons/platzi.svg'
import Twitter from '../../assets/icons/twitter.svg'

function Footer() {
  return (
    <footer className="index-footer">
        <p>Copyright © by danielvaldivv</p>
        <p> 2021</p>
        <p>Contact</p>
        <ul className="index-footer-contact">
            <li><a href="https://www.linkedin.com/in/danielvaldivv/"><span><img src={Linkedin} alt="Logo LinkedIn"/></span></a></li>
            <li><a href="https://github.com/danielvaldivv"><span><img src={GitHub} alt="Logo GitHub"/></span></a></li>
            <li><a href="https://platzi.com/p/danielvaldivv/"><span><img src={Platzi} alt="Logo Platzi"/></span></a></li>
            <li><a href="https://twitter.com/danielvaldivv/"><span><img src={Twitter} alt="Logo Twitter"/></span></a></li>
        </ul> 
    </footer>
  )
}

export default Footer
