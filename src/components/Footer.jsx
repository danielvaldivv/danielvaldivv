import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="index-footer">
        <ul className="index-footer-contact">
            <li><a href="https://www.linkedin.com/in/danielvaldivv/"><span><img src="../assets/icons/icons/linkedin.svg" alt="Logo LinkedIn"/></span></a></li>
            <li><a href="https://github.com/danielvaldivv"><span><img src="../assets/icons/icons/github.svg" alt="Logo GitHub"/></span></a></li>
            <li><a href="https://platzi.com/p/danielvaldivv/"><span><img src="../assets/icons/icons/platzi.svg" alt="Logo Platzi"/></span></a></li>
            <li><a href="https://twitter.com/danielvaldivv/"><span><img src="../assets/icons/icons/twitter.svg" alt="Logo Twitter"/></span></a></li>
        </ul> 
    </footer>
  )
}

export default Footer
