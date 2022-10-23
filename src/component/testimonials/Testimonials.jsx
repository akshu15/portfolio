import React from 'react'
import './testimonials.css'
import IMG from '../../assets/akshata.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [{
  avatar: IMG,
  name: 'Akshata',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem ex consequatur incidunt laborum et minima magni exercitationem sequi, voluptate delectus possimus pariatur aliquam commodi quidem. Distinctio cumque rerum eos?'
},
{
  avatar: IMG,
  name: 'Singh',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem ex consequatur incidunt laborum et minima magni exercitationem sequi, voluptate delectus possimus pariatur aliquam commodi quidem. Distinctio cumque rerum eos?'
},
{
  avatar: IMG,
  name: 'ABC',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem ex consequatur incidunt laborum et minima magni exercitationem sequi, voluptate delectus possimus pariatur aliquam commodi quidem. Distinctio cumque rerum eos?'
}
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable:true}}>
        {data.map((data,index)=>{
          return(
              <SwiperSlide key= {index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={data.avatar} alt='Avatar'/>
                </div>
                  <h5 className='client__name'>{data.name}</h5>
                  <small className='client__review'>
                    {data.review}
                  </small>

            </SwiperSlide>
            
          )
        })}
      </Swiper>

    </section>
  )
}

export default Testimonials