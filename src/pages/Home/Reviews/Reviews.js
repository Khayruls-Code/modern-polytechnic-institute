import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination, Navigation, Autoplay
} from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
SwiperCore.use([Pagination, Navigation, Autoplay]);

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div className='review py-12'>
      <div className='lg-container'>
        <div className="section-title text-center mb-6">
          <p className='text-md font-medium text-primary tracking-widest'>REVIEWS</p>
          <h1 className='text-4xl text-secondary font-bold'>What People Says</h1>
        </div>
        <Swiper autoplay={{
          "delay": 3000,
          "disableOnInteraction": false
        }} navigation={true} loop={true} className="mySwiper">
          {
            reviews?.map(review => <SwiperSlide key={review.id} className='flex items-center justify-center'>
              <div className='py-5 lg:w-3/5 text-center px-6 pt-16 pb-6 review-slide relative mt-16 mb-20'>
                <img className='w-24 mx-auto absolute h-24 object-cover rounded-full' src={review.img} alt="" />
                <h1 className='text-xl text-secondary'>{review.name}</h1>
                <h2 className='text-primary'>{review.email}</h2>
                <p className='text-md font-medium'>{review.desc}</p>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;