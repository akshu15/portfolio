import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/awsiotcloud.png'
import IMG2 from '../../assets/blockchain.jpeg'
import IMG3 from '../../assets/ml.jpeg'
import IMG4 from '../../assets/rasanlu.png'
import {MdArrowForwardIos} from 'react-icons/md'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [{
  id : 1,
  image: IMG1,
  title: 'IoT based Healthcare with AI Chatbot and AWS',
  content:'This project aims at providing an IoT based remote Health care kit and an AI Chatbot to patients.',
  demo: 'https://github.com/akshu15/IoT-based-Healthcare-with-AI-Chatbot-and-AWS',
},
{
  id : 2,
  image: IMG2,
  title: 'Blockchain Campus Feedback Fungible Token-FT',
  content:'To improve the campus dining feedback system in order to improve the service, I implemented a Fungible Token.',
  demo: 'https://github.com/akshu15/Blockchain-CampusFeedbackFungibleToken-FT',
},
{
  id : 3,
  image: IMG3,
  title: 'Classification using Machine Learning',
  content:'Using Pima Indians Diabetes Database, classified whether a patient has diabetes or not using logistic regression and neural network.',
  demo: 'https://github.com/akshu15/Classification-using-Machine-Learning',
},
{
  id : 4,
  image: IMG4,
  title: 'Chatbot for Health Consultation',
  content:'Developed Healthcare bot for health consultation using Rasa Technology.',
  demo: 'https://github.com/akshu15/Healthcare-bot',
},
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Some of my work</h5>
      <h2>Portfolio</h2>
      <Swiper className='container portfolio__container'
            modules={[Pagination]}
            spaceBetween={30}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              }
            }}

            pagination={{clickable:true}}>
        {data.map((data,index)=>{
          return(
              <SwiperSlide key= {index} className='portfolio__item'>

              <div className='portfolio__item-partition'>
                <div className='portfolio__item-image'>
                  <img src={data.image} alt={data.title}></img>
                </div>
                <div className='portfolio__item-content'>
                {data.content}
                </div>
                <div>
                <a href={data.demo} target='_blank' className='portfolio__item-cta'>Demo
                <MdArrowForwardIos className='portfolio__item-icon'/></a>
                </div>
              </div>

            </SwiperSlide>
            
          )
        })}
      </Swiper>

    </section>
  )
}

export default Portfolio