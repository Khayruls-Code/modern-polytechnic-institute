import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { MdOutlineRecommend } from 'react-icons/md';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './CourseDetails.css'
import useAuth from '../../hooks/useAuth';

const CourseDetails = () => {
  const { courseId } = useParams()
  const [course, setCourse] = useState({})
  const { user } = useAuth()
  useEffect(() => {
    fetch(`http://localhost:5000/courses/${courseId}`)
      .then(res => res.json())
      .then(data => setCourse(data))
  }, [courseId])

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    data.img = course?.img
    data.status = "Pending"
    fetch('http://localhost:5000/orders', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Successfully Purchased, please wait for the resonse!!!')
        }
      })
    fetch('http://localhost:5000/student-order', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => { })
    reset()
  };

  return (
    <div className='pt-24 pb-8 courseDetails'>
      <div className="lg-container">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img src={course?.img} alt="" />
            <div className='flex items-center justify-between my-3'>
              <Rating
                emptySymbol={<BsStar style={{ color: "orangered" }} />}
                fullSymbol={<BsStarFill style={{ color: "orangered" }} />}
                initialRating={course?.rating}
                readonly
              />
              <p className='flex items-center justify-center text-lg'><MdOutlineRecommend style={{ color: "orangered", marginRight: "5px" }} />{course?.review}k</p>
            </div>
            <h1 className='text-3xl text-secondary font-semibold'>{course?.name}</h1>
            <h2 className='text-2xl text-primary my-3'>৳{course?.fee}/semester</h2>
            <p className='text-md font-medium italic'>{course?.desc}</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("name", { required: true })} placeholder='Your Name' defaultValue={user?.displayName} readOnly />
              <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("email", { required: true })} placeholder='Email' type='email' defaultValue={user?.email} readOnly />
              <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("phone", { required: true })} placeholder='Phone Number' type='number' />
              <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("address", { required: true })} placeholder='City/Road' type='text' />
              <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("date", { required: true })} placeholder='Date' type='date' />
              <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("courseName", { required: true })} placeholder='Course Name' type='text' defaultValue={course?.name} readOnly />
              <button type='submit' className='block relative overflow-hidden primary-btn slim-border border-gray py-3 px-4 bg-primary rounded-full w-32 mx-auto text-white'>
                <span className='relative z-10 font-semibold'>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;