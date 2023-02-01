import React from 'react'
import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/akshata-singh/' target="_blank" rel = "noreferrer"><AiOutlineLinkedin/></a>
        <a href='https://github.com/akshu15' target="_blank" rel = "noreferrer"><AiOutlineGithub/></a>
        </div>
  )
}

export default HeaderSocials