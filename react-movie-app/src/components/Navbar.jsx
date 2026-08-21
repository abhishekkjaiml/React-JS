import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import logo from '../assets/movieapp_logo.png'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <header className='w-full h-18 border-b border-gray-200 bg-white'>

      <div className='max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-8'>

        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className='flex items-center cursor-pointer shrink-0'
        >
          <img
            src={logo}
            alt='MovieApp'
            className='w-32 h-auto object-contain'
          />
        </div>

        {/* Search */}
        <div className='flex-1 max-w-lg'>
          <SearchBar />
        </div>

        {/* Navigation */}
        <div className='flex items-center shrink-0'>

          <ul className='flex items-center gap-6'>

            <li
              onClick={() => navigate('/')}
              className='text-sm font-medium text-gray-700 cursor-pointer hover:text-red-500 transition'
            >
              Movies
            </li>

            <li
              onClick={() => navigate('/favourite')}
              className='text-sm font-medium text-gray-700 cursor-pointer hover:text-red-500 transition'
            >
              Favourites
            </li>

            <li
              onClick={() => navigate('/cinemas')}
              className='text-sm font-medium text-gray-700 cursor-pointer hover:text-red-500 transition'
            >
              Cinemas
            </li>

            <li
              onClick={() => navigate('/offers')}
              className='text-sm font-medium text-gray-700 cursor-pointer hover:text-red-500 transition'
            >
              Offers
            </li>

            <li
              onClick={() => navigate('/aboutus')}
              className='text-sm font-medium text-gray-700 cursor-pointer hover:text-red-500 transition'
            >
              About Us
            </li>

          </ul>

        </div>

      </div>

    </header>
  )
}

export default Navbar