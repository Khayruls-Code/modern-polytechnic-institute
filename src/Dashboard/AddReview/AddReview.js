import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import FileBase64 from 'react-file-base64';
import { useState } from 'react';

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imgUrl, setImgUrl] = useState('')
  const { user } = useAuth()
  const onSubmit = data => {
    data.img = imgUrl || user.photoURL
    fetch('http://localhost:5000/reviews', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Review Posted Succrssfully !!!')
        }
      })
    reset()
  }
  return (
    <div className='pt-24 pb-4'>
      <div className='sm-container profile py-8 px-4'>
        <h1 className='text-center text-2xl font-semibold text-primary'>Express Your Opiniion</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("name", { required: true })} placeholder='Your Name' defaultValue={user.displayName} readOnly />
          <input className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("email", { required: true })} placeholder='Email' type='email' defaultValue={user.email} readOnly />
          <div className='md:flex items-center justify-between gap-8 w-full lg:w-3/4 mx-auto'>
            <input className='block slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("rating", { required: true })} placeholder='Rating' type='Number' />
            <FileBase64
              style={{ width: "100%" }}
              multiple={false}
              onDone={({ base64 }) => setImgUrl(base64)} />
          </div>
          <textarea className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' {...register("desc", { required: true })} placeholder='Your Opinion' rows="5" ></textarea>
          <button type='submit' className='block relative overflow-hidden primary-btn slim-border border-gray py-3 px-4 bg-primary rounded-full w-32 mx-auto text-white'>
            <span className='relative z-10 font-semibold'>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;