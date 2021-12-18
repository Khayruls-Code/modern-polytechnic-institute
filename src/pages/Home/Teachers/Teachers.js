import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Teachers = () => {
  const [teachers, setTeaches] = useState([])
  useEffect(() => {
    fetch('https://mysterious-falls-49550.herokuapp.com/teachers')
      .then(res => res.json())
      .then(data => setTeaches(data))
  }, [])
  return (
    <div className='py-12'>
      <div className="lg-container">
        <div className="section-title text-center mb-6">
          <p className='text-md font-medium text-primary tracking-widest'>TEACHERS</p>
          <h1 className='text-4xl text-secondary font-bold'>Experienced Technician</h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {
            teachers?.map(teacher => <div className='teacher-box relative' key={teacher.id}>
              <img className='h-full object-cover' src={teacher.img} alt="" />
              <div className='absolute bottom-0 hidden teacher-info'>
                <h1 className='text-xl mt-2 font-semibold text-secondary'>{teacher.name} <cite className='font-light'>{teacher.degree}</cite></h1>
                <p className='text-md font-normal text-primary'>{teacher.email}</p>
                <p className='text-md font-medium mt-1'>{teacher.title} ({teacher.depertment})</p>
                <div className="social flex items-center gap-3 mt-4">
                  <a href='/' className="icon flex items-center justify-center bg-white text-primary">
                    <FaFacebookF />
                  </a>
                  <a href='/' className="icon flex items-center justify-center bg-white text-primary">
                    <FaTwitter />
                  </a>
                  <a href='/' className="icon flex items-center justify-center bg-white text-primary">
                    <FaLinkedinIn />
                  </a>
                  <a href='/' className="icon flex items-center justify-center bg-white text-primary">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Teachers;