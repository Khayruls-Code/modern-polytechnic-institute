import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import '../Dashboard.css'

const Profile = () => {
  const { user } = useAuth()
  const [order, setOrder] = useState([])

  useEffect(() => {
    fetch(`https://mysterious-falls-49550.herokuapp.com/students?email=${user?.email}`)
      .then(res => res.json())
      .then(data => { setOrder(data) })
  }, [user?.email])
  if (order.length) {
    console.log(order)
  }
  return (
    <div className='pt-24 pb-4'>
      <div className="sm-container py-12 px-8 profile">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img className='w-36 h-36 rounded-full object-cover' src={user.photoURL} alt="" />
            <h1 className='text-xl text-secondary font-semibold mt-4'>{user?.displayName}</h1>
            <p className='text-md font-medium my-3'>{user.email}</p>
            <p className='text-md font-medium my-3'>Address:</p>
            <p className='text-md font-medium my-3'>Phone Number: +88</p>
            <p className='text-md font-medium my-3'>Certificate: No</p>
          </div>
          <div>
            <h1 className='text-2xl text-primary font-semibold'>Course Have Purchased:</h1>
            {
              order?.map(item => <div
                key={item._id}
                className='flex items-center bg-primary rounded-lg gap-2 p-1 my-3'>
                <img className='w-1/3 rounded-lg' src={item.img} alt="" />
                <div className='flex-1'>
                  <h1 className='text-white font-medium text-'>{item.courseName}</h1>
                  <h2 className='text-sm text-gray my-2'>Date: {item.date}</h2>
                  <p className='py-1 px-2 bg-secondary text-white rounded-full w-min'>{item.status}</p>
                </div>
              </div>)
            }
            {
              !order.length && <h1 className='text-2xl font-medium'>No Course Purchased yet !!</h1>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;