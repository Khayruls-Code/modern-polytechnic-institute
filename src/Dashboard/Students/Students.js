import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Students = () => {
  const [students, setStudents] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/students')
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])

  const handleDelete = (id) => {
    const makeSure = window.confirm('Are you sure to want to delete the student?')
    if (makeSure) {
      fetch(`http://localhost:5000/students/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount === 1) {
            const remain = students.filter(student => student._id !== id)
            setStudents(remain)
          }
        })
    }
  }

  return (
    <div className='pt-24 pb-4'>
      <div className="lg-container profile py-12 px-6">
        <table className='w-full'>
          <thead>
            <tr className=' text-left text-primary'>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course Name</th>
              <th>date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              students?.map(student => <tr key={student._id}
                className='table-border text-sm font-medium'
              >
                <td className='py-3'>
                  <img className='w-12 h-12 rounded-full object-cover' src={student.profileImg} alt="" />
                </td>
                <td className='py-3'>{student.name}</td>
                <td className='py-3'>{student.email}</td>
                <td className='py-3'>{student.courseName}</td>
                <td className='py-3'>{student.date}</td>
                <td className='py-3'>
                  <div onClick={() => handleDelete(student._id)} style={{ backgroundColor: "red" }} className='w-10 h-10 flex items-center justify-center text-white rounded-full bg-gray cursor-pointer' title='Cancel Order'><FaTimes /></div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;