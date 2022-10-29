import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        {/* UI/UX Design Card */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have hands-on experience on Figma, Adobe XD, Photoshop and CorelDraw.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
                <p>I have designed wireframes, prototypes, certificates and posters.</p>
              </li>

              <li>
                <BiCheck className='service__list-icon'/>
                <p>I create better experience for People.</p>
              </li>
          </ul>
        </article>

        {/* Web Development Card */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full-stack application development using JS libraries and frameworks.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing GraphQL queries to perform CRUD operations on MongoDB database.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing REST APIs using AWS Lambda functions.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrated Payment Gateway for automatic billing.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing unit tests using Jest.</p>
            </li>
          </ul>
        </article>

        {/* Other Card */}
        <article className='service'>
          <div className='service__head'>
            <h3>Other</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implemented projects on Machine Learning.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed a Fungible Token in Blockchain.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Volunteered to take lecture notes for a student with disability during Fall 2021 semester at University at Buffalo.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services