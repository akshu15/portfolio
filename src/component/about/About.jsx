import React from 'react'
import './about.css'
import ME from '../../assets/akshata1.PNG'
import {IoIosTimer} from 'react-icons/io'
import {BsStars, BsPersonCheckFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Akshata Singh' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <IoIosTimer className='about__icon'/>
              <h5>On Time</h5>
              <small>Good Time management</small>
            </article>

            <article className='about__card'>
              <BsStars className='about__icon'/>
              <h5>Clean Work</h5>
              <small>Write Clean code</small>
            </article>

            <article className='about__card'>
              <BsPersonCheckFill className='about__icon'/>
              <h5>Client Satisfaction</h5>
              <small>Client comes first</small>
            </article>
          </div>

          <p>
            <h3>Hi there!</h3> I am a Self-motivated Software Engineer with experience in developing Software Applications.
            I am Confident and a Quick Learner with curiosity to expand knowledge and stay current with the latest technologies and industry trends. 
            I work well both as an individual contributor and also a team member with an accomplishment history of working on team projects.
            I have also created some projects on my own, like this portfolio website (using React).
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About