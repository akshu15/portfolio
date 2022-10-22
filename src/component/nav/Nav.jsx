import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'
import {MdContactMail} from 'react-icons/md'
import {GiSpellBook} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={ activeNav === '#' ? 'active' : ''}><BiHomeHeart/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''}><FaUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : ''}><GiSpellBook/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={ activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>

    </nav>
  )
}

export default Nav