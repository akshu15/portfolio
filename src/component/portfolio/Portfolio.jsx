import React from 'react'
import './portfolio.css'
import IMG from '../../assets/img.jpeg'

const data = [{
  id : 1,
  image: IMG,
  title: 'This is a portfolio item title',
  github: 'https://github.com/akshu15',
  demo: 'https://github.com/akshu15/IoT-based-Healthcare-with-AI-Chatbot-and-AWS',
},
{
  id : 2,
  image: IMG,
  title: 'This is a portfolio item title',
  github: 'https://github.com/akshu15',
  demo: 'https://github.com/akshu15/IoT-based-Healthcare-with-AI-Chatbot-and-AWS',
},
{
  id : 3,
  image: IMG,
  title: 'This is a portfolio item title',
  github: 'https://github.com/akshu15',
  demo: 'https://github.com/akshu15/IoT-based-Healthcare-with-AI-Chatbot-and-AWS',
}
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        
        {
          data.map((data)=> {
            return(
              <article key={data.id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={data.image} alt={data.title}></img>
                </div>
                <h3>{data.title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={data.github} className='btn' target='_blank'>Github</a>
                  <a href={data.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio