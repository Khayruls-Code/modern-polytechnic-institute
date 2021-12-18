import React from 'react';
import { FaFacebookF, FaPhoneAlt, FaInstagram, FaLinkedinIn, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { GoLocation } from 'react-icons/go';
import { Link } from 'react-router-dom';
import gallery1 from '../../../images/banner/6.jpg'
import gallery2 from '../../../images/banner/7.jpg'
import gallery3 from '../../../images/banner/8.jpg'
import gallery4 from '../../../images/banner/5.jpg'
import gallery5 from '../../../images/banner/4.jpg'
import gallery6 from '../../../images/banner/3.jpg'
import gallery7 from '../../../images/banner/1.jpg'
import gallery8 from '../../../images/banner/2.jpg'
import gallery9 from '../../../images/banner/any.jpg'

const Footer = () => {
  return (
    <div className='footer pt-16'>
      <div className="lg-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="logo">
              <Link className='text-3xl font-bold text-white' to="/"><h1>M<span className='text-primary mx-0.5'>.</span>P<span className='text-primary mx-0.5'>.</span>I</h1></Link>
            </div>
            <p className='transparent-white'>The populer world class education platform. We provide the best knowledge gaining way to our student. Our Students are working successfully over the world. We heve been proudly working and leading out institute since 2000.</p>
          </div>
          <div>
            <h1 className='text-2xl text-white'>Contact Info</h1>
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
              <a href='/' className="icon flex items-center justify-center bg-white text-primary">
                <FaGooglePlusG />
              </a>
            </div>
            <p className='text-md transparent-white my-3 flex items-center'><SiGmail style={{ color: "#00BFFF", marginRight: "10px" }} />khayrulislam2525@gmail.com</p>
            <p className='text-md transparent-white my-3 flex items-center'><FaPhoneAlt style={{ color: "#00BFFF", marginRight: "10px" }} />+88 017631-55578</p>
            <p className='text-md transparent-white my-3 flex items-center'><GoLocation style={{ color: "#00BFFF", marginRight: "10px" }} />ABC road, Bangladesh</p>
          </div>
          <div>
            <h1 className='text-2xl text-white'>Important Links</h1>
            <ul className='footer-link'>
              <li className='my-1.5 transparent-white'>
                <Link to='/'>Home</Link>
              </li>
              <li className='my-1.5 transparent-white'>
                <Link to='/'>Courses</Link>
              </li>
              <li className='my-1.5 transparent-white'>
                <Link to='/'>Security & Privecy</Link>
              </li>
              <li className='my-1.5 transparent-white'>
                <Link to='/'>Terms & service</Link>
              </li>
              <li className='my-1.5 transparent-white'>
                <Link to='/'>Get In Touch</Link>
              </li>
              <li className='my-1.5 transparent-white'>
                <Link to='/'>Teachers & Students</Link>
              </li>
              <li className='my-1.5 transparent-white'>
                <Link to='/'>FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='text-2xl text-white'>Gallery</h1>
            <div className='flex flex-wrap mt-2'>
              <img className='w-1/3' src={gallery1} alt="" />
              <img className='w-1/3' src={gallery2} alt="" />
              <img className='w-1/3' src={gallery3} alt="" />
              <img className='w-1/3' src={gallery4} alt="" />
              <img className='w-1/3' src={gallery5} alt="" />
              <img className='w-1/3' src={gallery6} alt="" />
              <img className='w-1/3' src={gallery7} alt="" />
              <img className='w-1/3' src={gallery8} alt="" />
              <img className='w-1/3' src={gallery9} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright py-6 text-center mt-12">
        <p className='transparent-white'>&copy; 2021 with <span className='text-primary'>Love</span> By Khayrul Islam</p>
      </div>
    </div>
  );
};

export default Footer;