import React from 'react';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

  const { singInUsingGoogle, createUser } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const handleSingIn = (e) => {
    e.preventDefault()
    createUser(email, password, name, imgUrl)
    e.target.reset()
  }

  return (
    <div className='login-regi relative'>
      <div className="login-form absolute  w-full md:w-2/3 lg:w-1/3">
        <h1 className='text-white text-3xl font-bold text-center relative z-10'>Registration Form</h1>
        <form onSubmit={handleSingIn}>
          <input onBlur={(e) => setName(e.target.value)} className='block w-full py-2.5 px-3 bg-transparent outline-none placeholder-white my-4 rounded-sm text-white font-semibold' type="text" placeholder='Your Name' />
          <input onBlur={(e) => setImgUrl(e.target.value)} className='block w-full py-2.5 px-3 bg-transparent outline-none placeholder-white my-4 rounded-sm text-white font-semibold' type="text" placeholder='Compress Photo Url' />
          <input onBlur={(e) => setEmail(e.target.value)} className='block w-full py-2.5 px-3 bg-transparent outline-none placeholder-white my-4 rounded-sm text-white font-semibold' type="email" placeholder='Your Email' />
          <input onBlur={(e) => setPassword(e.target.value)} className='block w-full py-2.5 px-3 bg-transparent outline-none placeholder-white my-4 rounded-sm text-white font-semibold' type="password" placeholder='Password' />
          <button type='submit' className='block relative overflow-hidden primary-btn py-3 px-4 bg-primary rounded-full w-32 mx-auto text-white'>
            <span className='relative z-10 font-semibold'>Register</span>
          </button>
        </form>
        <p className='text-white my-3 relative z-10 text-center'>Already have an account? <Link className='text-secondary' to='/login'>Login</Link></p>
        <div onClick={singInUsingGoogle} className='relative z-10'>
          <div className='flex items-center py-3 px-4 bg-transparent rounded-full md:w-2/3 mx-auto justify-center text-white mt-3 cursor-pointer'>
            <FaGoogle style={{ marginRight: "10px", color: "#EA4335", fontSize: "20px" }} />
            Google Sing In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;