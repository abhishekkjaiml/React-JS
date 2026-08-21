import React from 'react'
import { useNavigate } from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer className='border-t border-gray-200 bg-white mt-12'>

      <div className='max-w-7xl mx-auto px-6 py-10'>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

          {/* Logo */}
          <div>
            <h2
              onClick={() => navigate('/')}
              className='text-xl font-bold cursor-pointer'
            >
              Movie<span className='text-red-500'>App</span>
            </h2>

            <p className='text-sm text-gray-500 mt-3 leading-6'>
              Discover movies, find cinemas and book your
              favourite seats with ease.
            </p>
          </div>

          {/* Movies */}
          <div>
            <h3 className='font-semibold text-gray-800 mb-4'>
              Movies
            </h3>

            <ul className='space-y-3 text-sm text-gray-500'>
              <li
                onClick={() => navigate('/')}
                className='cursor-pointer hover:text-red-500'
              >
                Now Showing
              </li>

              <li
                onClick={() => navigate('/movies')}
                className='cursor-pointer hover:text-red-500'
              >
                Upcoming Movies
              </li>

              <li
                onClick={() => navigate('/favourite')}
                className='cursor-pointer hover:text-red-500'
              >
                Favourites
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='font-semibold text-gray-800 mb-4'>
              Company
            </h3>

            <ul className='space-y-3 text-sm text-gray-500'>
              <li
                onClick={() => navigate('/aboutus')}
                className='cursor-pointer hover:text-red-500'
              >
                About Us
              </li>

              <li className='cursor-pointer hover:text-red-500'>
                Contact Us
              </li>

              <li className='cursor-pointer hover:text-red-500'>
                Privacy Policy
              </li>

              <li className='cursor-pointer hover:text-red-500'>
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className='font-semibold text-gray-800 mb-4'>
              Follow Us
            </h3>

            <div className='flex gap-3'>

              <button className='w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-400 transition'>
                <InstagramIcon sx={{ fontSize: 19 }} />
              </button>

              <button className='w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-400 transition'>
                <FacebookOutlinedIcon sx={{ fontSize: 19 }} />
              </button>

              <button className='w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-400 transition'>
                <XIcon sx={{ fontSize: 18 }} />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className='border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3'>

          <p className='text-sm text-gray-500'>
            © 2026 MovieApp. All rights reserved.
          </p>

          <p className='text-sm text-gray-400'>
            Your movie. Your seat. Your experience.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer