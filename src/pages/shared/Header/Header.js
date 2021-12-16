import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go'

const Header = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className='shadow py-4 fixed top-0 w-full z-50 bg-white'>
      <div className='lg-container px-4 mx-auto flex items-center justify-between'>
        <div className="logo">
          <Link className='text-2xl font-bold text-secondary' to="/"><h1>M<span className='text-primary mx-0.5'>.</span>P<span className='text-primary mx-0.5'>.</span>I</h1></Link>
        </div>
        <nav className='flex items-center justify-center'>
          <ul className={!isShow ? 'flex items-center justify-center navbar hide' : 'flex items-center justify-center navbar'}>
            <li>
              <Link className='text-md inline-block font-medium px-3' to='/'>Home</Link>
            </li>
            <li>
              <Link className='text-md inline-block font-medium px-3' to='/courses'>Courses</Link>
            </li>
            <li>
              <Link className='text-md inline-block font-medium px-3' to='/admission'>Admission</Link>
            </li>
            <li>
              <Link className='text-md inline-block font-medium px-3' to='/reviews'>Reviews</Link>
            </li>
          </ul>
          <div className='login-option'>
            <Link className='text-md inline-block py-1 font-medium text-primary px-4 bg-gray ml-2 rounded-full' to='/login'>Login</Link>
            <Link className='text-md inline-block py-1 font-medium text-primary px-4 bg-gray ml-2 rounded-full' to='/register'>Register</Link>
          </div>
          <div onClick={() => setIsShow(!isShow)} className="menu-bar text-2xl ml-4 cursor-pointer hidden">
            <GoThreeBars />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;