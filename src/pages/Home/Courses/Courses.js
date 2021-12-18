import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <div className='py-12 courses bg-white' id='courses'>
      <div className="lg-container">
        <div className="section-title text-center mb-6">
          <p className='text-md font-medium text-primary tracking-widest'>COURSES</p>
          <h1 className='text-4xl text-secondary font-bold'>Awesome Technologies</h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {
            courses.map(course => <Course
              key={course._id}
              course={course}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;