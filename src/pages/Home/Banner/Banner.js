import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import '../Home.css'
import SwiperCore, {
  FreeMode, Navigation, Thumbs
} from 'swiper';
import img1 from '../../../images/banner/1.jpg'
import img2 from '../../../images/banner/2.jpg'
import img3 from '../../../images/banner/3.jpg'
import img4 from '../../../images/banner/4.jpg'
import img5 from '../../../images/banner/5.jpg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper style={{ '--swiper-navigation-color': '#00BFFF', '--swiper-pagination-color': '#000' }} loop={true} spaceBetween={0} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
        <SwiperSlide className='relative img-container'>
          <img className='banner-img' src={`${img1}`} alt='' />
          <div className="slider-caption absolute z-40 text-center">
            <h1 className='lg:text-6xl text-3xl md:text-5xl font-extrabold text-white mb-4'>Apply For Your Course <br /> <span className='text-primary'>Today</span></h1>
            <button className='block relative overflow-hidden primary-btn py-3.5 px-6 bg-primary rounded-full w-40 mx-auto text-white'>
              <Link className='relative z-10 font-semibold' to='/admission'>Contact Now</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative img-container'>
          <img className='banner-img' src={`${img2}`} alt='' />
          <div className="slider-caption absolute z-40 text-center">
            <h1 className='lg:text-6xl text-3xl md:text-5xl font-extrabold text-white mb-4'>A Beautiful Campus Makes The <br /> <span className='text-primary'>Study Effective</span></h1>
            <button className='block relative overflow-hidden primary-btn py-3.5 px-6 bg-primary rounded-full w-40 mx-auto text-white'>
              <HashLink className='relative z-10 font-semibold' to='/home#courses'>Visit Now</HashLink>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative img-container'>
          <img className='banner-img' src={`${img3}`} alt='' />
          <div className="slider-caption absolute z-40 text-center">
            <h1 className='lg:text-6xl text-3xl md:text-5xl font-extrabold text-white mb-4'>Education Is The Key Of <br /> <span className='text-primary'>Success</span></h1>
            <button className='block relative overflow-hidden primary-btn py-3.5 px-6 bg-primary rounded-full w-40 mx-auto text-white'>
              <Link className='relative z-10 font-semibold' to='/admission'>Contact Now</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative img-container'>
          <img className='banner-img' src={`${img4}`} alt='' />
          <div className="slider-caption absolute z-40 text-center">
            <h1 className='lg:text-6xl text-3xl md:text-5xl font-extrabold text-white mb-4'>We Provide The Better Opp <br /> <span className='text-primary'>Opportunities</span></h1>
            <button className='block relative overflow-hidden primary-btn py-3.5 px-6 bg-primary rounded-full w-40 mx-auto text-white'>
              <Link className='relative z-10 font-semibold' to='/admission'>Contact Now</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative img-container'>
          <img className='banner-img' src={`${img5}`} alt='' />
          <div className="slider-caption absolute z-40 text-center">
            <h1 className='lg:text-6xl text-3xl md:text-5xl font-extrabold text-white mb-4'>Apply For Your Course <br /> <span className='text-primary'>Today</span></h1>
            <button className='block relative overflow-hidden primary-btn py-3.5 px-6 bg-primary rounded-full w-40 mx-auto text-white'>
              <Link className='relative z-10 font-semibold' to='/admission'>Contact Now</Link>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={0} slidesPerView={4} freeMode={true} autoplay={{ delay: 1000 }} watchSlidesProgress={true} className="mySwiper">
        <SwiperSlide><img className='small-banner-img' src={`${img1}`} alt='' /></SwiperSlide>
        <SwiperSlide><img className='small-banner-img' src={`${img2}`} alt='' /></SwiperSlide>
        <SwiperSlide><img className='small-banner-img' src={`${img3}`} alt='' /></SwiperSlide>
        <SwiperSlide><img className='small-banner-img' src={`${img4}`} alt='' /></SwiperSlide>
        <SwiperSlide><img className='small-banner-img' src={`${img5}`} alt='' /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;