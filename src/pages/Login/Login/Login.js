import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import '../Login.css'
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const Login = () => {
  const { signInUser, singInUsingGoogle } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const hangleSignIn = (e) => {
    e.preventDefault()
    signInUser(email, password, location, navigate)
    e.target.reset()
  }

  const handleGoogle = (e) => {
    e.preventDefault()
    singInUsingGoogle(location, navigate)
  }

  return (
    <div className='login-regi relative'>
      <div className="login-form absolute w-full md:w-2/3 lg:w-1/3">
        <h1 className='text-white text-3xl font-bold text-center relative z-10'>Login Form</h1>
        <form onSubmit={hangleSignIn}>
          <input onBlur={(e) => setEmail(e.target.value)} className='block w-full py-2.5 px-3 bg-transparent outline-none placeholder-white my-4 rounded-sm text-white font-semibold' type="text" placeholder='Your Email' />
          <input onBlur={(e) => setPassword(e.target.value)} className='block w-full py-2.5 px-3 bg-transparent outline-none placeholder-white my-4 rounded-sm text-white font-semibold' type="password" placeholder='Password' />
          <button type='submit' className='block relative overflow-hidden primary-btn py-3 px-4 bg-primary rounded-full w-32 mx-auto text-white'>
            <span className='relative z-10 font-semibold'>Login</span>
          </button>
        </form>
        <p className='text-white my-3 relative z-10 text-center'>Are You New Here? <Link className='text-secondary' to='/register'>Register</Link></p>
        <div onClick={handleGoogle} className='relative z-10'>
          <div className='flex items-center py-3 px-4 bg-transparent rounded-full md:w-2/3 mx-auto justify-center text-white mt-3 cursor-pointer'>
            <FaGoogle style={{ marginRight: "10px", color: "#EA4335", fontSize: "20px" }} />
            Google Sing In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;