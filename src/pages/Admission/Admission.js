import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Admission = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth()

  const onSubmit = data => {
    fetch('https://mysterious-falls-49550.herokuapp.com/orders', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Request submited successfully !!!')
          reset()
        }
      })
  }
  return (
    <div className='pt-24 pb-4'>
      <div className='profile sm-container py-12 px-6'>
        <h1 className='text-2xl text-primary text-center font-semibold'>Get In Touch</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("name", { required: true })} placeholder='Your Name' defaultValue={user?.displayName} readOnly />
          <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("email", { required: true })} placeholder='Email' type='email' defaultValue={user?.email} readOnly />
          <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("phone", { required: true })} placeholder='Phone Number' type='number' />
          <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("subject", { required: true })} placeholder='Subject' type='text' />
          <textarea className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("messege", { required: true })} rows="5" placeholder='Your Message'></textarea>
          <button type='submit' className='block relative overflow-hidden primary-btn slim-border border-gray py-3 px-4 bg-primary rounded-full w-32 mx-auto text-white'>
            <span className='relative z-10 font-semibold'>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admission;