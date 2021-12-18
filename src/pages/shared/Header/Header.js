import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go'
import useAuth from '../../../hooks/useAuth';
import '../shared.css'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isShow, setIsShow] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const { singOutUser, user, teacher } = useAuth()
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
              <HashLink className='text-md inline-block font-medium px-3' to='/home#courses'>Courses</HashLink>
            </li>
            <li>
              <Link className='text-md inline-block font-medium px-3' to='/admission'>Contact</Link>
            </li>
            <li>
              <Link className='text-md inline-block font-medium px-3' to='/blogs'>Blogs</Link>
            </li>
          </ul>
          {
            !user.email ? <div className='login-option'>
              <Link className='text-md inline-block py-1 font-medium text-primary px-4 bg-gray ml-2 rounded-full' to='/login'>Login</Link>
              <Link className='text-md inline-block py-1 font-medium text-primary px-4 bg-gray ml-2 rounded-full' to='/register'>Register</Link>
            </div> : <div className='cursor-pointer flex items-center gap-2 relative'>
              <img
                onClick={() => setShowDashboard(!showDashboard)}
                className='w-12 h-12 rounded-full object-cover' src={user?.photoURL} alt="" />
              <h1
                onClick={() => setShowDashboard(!showDashboard)}
                className='py-1 px-2 slim-border border-primary rounded-full'>{user?.displayName?.split(' ')[0]}</h1>
              <div className={!showDashboard ? "dashboard hideDashboard" : "dashboard"}>
                <ul>
                  <li>
                    <Link onClick={() => setShowDashboard(!showDashboard)} to='/profile'>Profile</Link>
                  </li>
                  {
                    !teacher ? <li>
                      <Link onClick={() => setShowDashboard(!showDashboard)} to='/addreview'>Review</Link>
                    </li> : <div>
                      <li>
                        <Link onClick={() => setShowDashboard(!showDashboard)} to='/neworder'>New Order</Link>
                      </li>
                      <li>
                        <Link onClick={() => setShowDashboard(!showDashboard)} to='/students'>Students</Link>
                      </li>
                      <li>
                        <Link onClick={() => setShowDashboard(!showDashboard)} to='/addteacher'>Add Teacher</Link>
                      </li>
                    </div>
                  }
                  <li onClick={singOutUser}>
                    <Link to='/'>Log Out</Link>
                  </li>
                </ul>
              </div>
            </div>
          }
          <div onClick={() => setIsShow(!isShow)} className="menu-bar text-2xl ml-4 cursor-pointer hidden">
            <GoThreeBars />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;