import React from 'react';
import Rating from 'react-rating';
import { BsStar, BsStarFill } from 'react-icons/bs'
import { MdOutlineRecommend } from 'react-icons/md'
import { Link } from "react-router-dom"

const Course = (props) => {
  const { course: { name, img, fee, desc, rating, review, _id } } = props
  return (
    <div className='course-box'>
      <img src={img} className='relative z-10' alt="" />
      <div className="course-info z-10 relative px-3 py-3 pb-5">
        <h2 className='text-2xl font-semibold text-secondary'>{name}</h2>
        <p className=' font-normal my-3'>{desc.slice(0, 100)}</p>
        <div className='flex items-center justify-between'>
          <Rating
            emptySymbol={<BsStar style={{ color: "orangered" }} />}
            fullSymbol={<BsStarFill style={{ color: "orangered" }} />}
            initialRating={rating}
            readonly
          />
          <p className='flex items-center justify-center text-lg'><MdOutlineRecommend style={{ color: "orangered", marginRight: "5px" }} />{review}k</p>
        </div>
        <h2 className='text-xl text-primary my-2'>৳{fee} <span className='text-sm'>/Month</span></h2>
        <button className='block relative overflow-hidden primary-btn py-2 px-6 bg-primary rounded-full w-30 text-white'>
          <Link className='relative z-10 font-semibold' to={`/courses/${_id}`}>Apply Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Course;