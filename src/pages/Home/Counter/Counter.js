import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className='counter'>
      <div className="lg-container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className='text-center'>
            <CountUp
              duration={2.5}
              start={0}
              end={6320}
              style={{ fontSize: "50px", fontWeight: "bold", color: "#00BFFF" }}
            />
            <h1 className='text-lg text-white font-medium'>Present Student</h1>
          </div>
          <div className='text-center'>
            <CountUp
              duration={2.5}
              start={0}
              end={12050}
              style={{ fontSize: "50px", fontWeight: "bold", color: "#00BFFF" }}
            />
            <h1 className='text-lg text-white font-medium'>Total Reviews</h1>
          </div>
          <div className='text-center'>
            <CountUp
              duration={2.5}
              start={0}
              end={120}
              style={{ fontSize: "50px", fontWeight: "bold", color: "#00BFFF" }}
            />
            <h1 className='text-lg text-white font-medium'>Online Courses</h1>
          </div>
          <div className='text-center'>
            <CountUp
              duration={2.5}
              start={0}
              end={300000}
              style={{ fontSize: "50px", fontWeight: "bold", color: "#00BFFF" }}
            />
            <h1 className='text-lg text-white font-medium'>Youtube Subscriber</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;