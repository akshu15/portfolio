import React from 'react'
import './about.css'
import ME from '../../assets/akshata.png'
import {HiCode, HiUsers, HiFolderOpen} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <HiCode className='about__icon'/>
              <h5>Experience</h5>
              <small>My Work Experience</small>
            </article>

            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>My Work Experience</small>
            </article>

            <article className='about__card'>
              <HiFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Some projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit minus ex, iste sequi repellendus ut animi reiciendis numquam, qui sit, consequuntur quasi molestiae laborum illo reprehenderit non debitis explicabo.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About