import React from 'react';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Courses from '../Courses/Courses';
import Reviews from '../Reviews/Reviews';
import Teachers from '../Teachers/Teachers';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Courses />
      <Teachers />
      <Counter />
      <Reviews />
    </div>
  );
};

export default Home;