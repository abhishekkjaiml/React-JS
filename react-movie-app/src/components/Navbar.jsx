import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <header className='w-full h-16 border-b border-gray-200 bg-white flex flex-wrap justify-between items-center px-6'>

      {/* Logo */}
      <div className='flex items-center'>
        <h2
          onClick={() => navigate('/')}
          className='text-xl font-bold cursor-pointer'
        >
          Movie<span className='text-red-500'>App</span>
        </h2>
      </div>

      {/* Search */}
      <div className='flex items-center ml-10'>
        <SearchBar />
      </div>

      {/* Navigation */}
      <div className='flex items-center'>
        <ul className='flex items-center gap-6'>

          <li
            onClick={() => navigate('/')}
            className='text-sm font-semibold text-gray-700 cursor-pointer hover:text-red-500 transition'
          >
            Movies
          </li>

          <li
            onClick={() => navigate('/favourite')}
            className='text-sm font-semibold text-gray-700 cursor-pointer hover:text-red-500 transition'
          >
            Favourites
          </li>

          <li
            onClick={() => navigate('/cinemas')}
            className='text-sm font-semibold text-gray-700 cursor-pointer hover:text-red-500 transition'
          >
            Cinemas
          </li>

          <li
            onClick={() => navigate('/offers')}
            className='text-sm font-semibold text-gray-700 cursor-pointer hover:text-red-500 transition'
          >
            Offers
          </li>

          <li
            onClick={() => navigate('/aboutus')}
            className='text-sm font-semibold text-gray-700 cursor-pointer hover:text-red-500 transition'
          >
            About Us
          </li>

        </ul>
      </div>

    </header>
  )
}

export default Navbar