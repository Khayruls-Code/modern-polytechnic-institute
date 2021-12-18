import React, { useEffect } from 'react';
import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import useAuth from '../../hooks/useAuth';

const NewOrders = () => {
  const [orders, setOrders] = useState([])
  const { user } = useAuth()

  //get orders
  useEffect(() => {
    fetch('https://mysterious-falls-49550.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  //update order
  const statusHandler = (e, id) => {
    const status = { status: e.target.value }
    fetch(`https://mysterious-falls-49550.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(status)
    })
      .then(res => res.json())
      .then(data => { })
  }

  //add to student list
  const handleAddStudent = (order, id) => {
    const newObj = Object.assign({}, order)
    newObj.profileImg = user.photoURL
    newObj.status = 'Approved'
    delete newObj._id
    fetch('https://mysterious-falls-49550.herokuapp.com/students', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newObj)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          alert('Student Added Successfully !!!')
          fetch(`https://mysterious-falls-49550.herokuapp.com/orders/${id}`, {
            method: "DELETE"
          })
            .then(res => res.json())
            .then(data => {
              if (data.acknowledged === true) {
                const remain = orders.filter(singleOrder => singleOrder._id !== id)
                setOrders(remain)
              }
            })
        }
      })
  }

  //delete order
  const handleDelete = (id) => {
    const makeSure = window.confirm('Are you sure to want to delete?')
    if (makeSure) {
      fetch(`https://mysterious-falls-49550.herokuapp.com/orders/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged === true) {
            const remain = orders.filter(singleOrder => singleOrder._id !== id)
            setOrders(remain)
          }
        })
    }
  }

  return (
    <div className='pt-24 pb-4'>
      <div className="lg-container profile py-12 px-6">
        <table>
          <thead>
            <tr className=' text-left text-primary'>
              <th>Name</th>
              <th>Email</th>
              <th>Course Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              orders?.map(order => <tr key={order._id}
                className='table-border text-sm font-medium'
              >
                <td className='py-3'>{order.name}</td>
                <td className='py-3'>{order.email}</td>
                <td className='py-3'>{order.courseName}</td>
                <td className='py-3'>{order.date}</td>
                <td className='py-3'>
                  <select onChange={(e) => statusHandler(e, order._id)} className='bg-gray py-1.5 px-2 rounded-full'>
                    <option value={order.status}>{order.status}</option>
                    <option value="Approved">Approved</option>
                  </select>
                </td>
                <td className='py-3 flex items-center gap-3'>
                  <div onClick={() => handleAddStudent(order, order._id)} style={{ backgroundColor: "green" }} className="w-10 h-10 flex items-center justify-center text-white rounded-full bg-gray cursor-pointer" title='Add to student list'>
                    <BsCheckLg />
                  </div>
                  <div onClick={() => handleDelete(order._id)} style={{ backgroundColor: "red" }} className='w-10 h-10 flex items-center justify-center text-white rounded-full bg-gray cursor-pointer' title='Cancel Order'><FaTimes /></div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewOrders;