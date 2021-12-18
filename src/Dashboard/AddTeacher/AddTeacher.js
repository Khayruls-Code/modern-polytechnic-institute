import React from 'react';
import { useState } from 'react';

const AddTeacher = () => {
  const [email, setEmail] = useState('')

  const handleAdmin = (e) => {
    e.preventDefault()
    const data = { email }
    fetch('http://localhost:5000/users/teacher', {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          alert('Success made admin!!!')
          e.target.reset()
        }
      })
  }

  return (
    <div className='pt-24 pb-4'>
      <div className="sm-container profile py-12 px-6">
        <h1 className='text-2xl text-primary font-semibold text-center'>Make An Admin</h1>
        <form onSubmit={handleAdmin}>
          <input onBlur={(e) => setEmail(e.target.value)} className='block w-full lg:w-3/4 mx-auto slim-border border-gray py-2.5 px-3 bg-transparent outline-none my-4 rounded-md font-semibold' type="email" placeholder='Type Email' />
          <button type='submit' className='block relative overflow-hidden primary-btn slim-border border-gray py-3.5 px-4 bg-primary rounded-full w-40 mx-auto text-white'>
            <span className='relative z-10 font-semibold'>Make Admin</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;