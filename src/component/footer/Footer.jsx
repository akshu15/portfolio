import React from 'react'
import './footer.css'
import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>ME</a>

      <ul className='permalinks'>
        <li><a href='#'></a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/akshata-singh/' target="_blank"><FaLinkedinIn/></a>
        <a href='https://github.com/akshu15' target="_blank"><AiOutlineGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Akshata Singh. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer