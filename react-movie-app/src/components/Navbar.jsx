import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import logo from '../assets/movieapp_logo.png'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

const Navbar = () => {

  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const onNavigate = (path) => {

    navigate(path)

    setIsMenuOpen(false)

  }


  return (
    <header className='navbar'>

      <div className='navbar-container'>

        {/* Logo */}

        <div
          onClick={() => onNavigate('/')}
          className='navbar-logo'
        >

          <img
            src={logo}
            alt='MovieApp'
            className='navbar-logo-image'
          />

        </div>


        {/* Search */}

        <div className='navbar-search'>
          <SearchBar />
        </div>


        {/* Desktop Navigation */}

        <div className='navbar-navigation'>

          <ul className='navbar-menu'>

            <li
              onClick={() => onNavigate('/')}
              className='navbar-link'
            >
              Movies
            </li>

            <li
              onClick={() => onNavigate('/favourite')}
              className='navbar-link'
            >
              Favourites
            </li>

            <li
              onClick={() => onNavigate('/cinemas')}
              className='navbar-link'
            >
              Cinemas
            </li>

            <li
              onClick={() => onNavigate('/offers')}
              className='navbar-link'
            >
              Offers
            </li>

            <li
              onClick={() => onNavigate('/aboutus')}
              className='navbar-link'
            >
              About Us
            </li>

          </ul>

        </div>


        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='navbar-menu-button'
        >

          {
            isMenuOpen
              ? <CloseOutlinedIcon />
              : <MenuOutlinedIcon />
          }

        </button>

      </div>


      {/* Mobile Navigation */}

      {
        isMenuOpen && (

          <div className='navbar-mobile-menu'>

            <button
              onClick={() => onNavigate('/')}
              className='navbar-mobile-link'
            >
              Movies
            </button>

            <button
              onClick={() => onNavigate('/favourite')}
              className='navbar-mobile-link'
            >
              Favourites
            </button>

            <button
              onClick={() => onNavigate('/cinemas')}
              className='navbar-mobile-link'
            >
              Cinemas
            </button>

            <button
              onClick={() => onNavigate('/offers')}
              className='navbar-mobile-link'
            >
              Offers
            </button>

            <button
              onClick={() => onNavigate('/aboutus')}
              className='navbar-mobile-link'
            >
              About Us
            </button>

          </div>

        )
      }

    </header>
  )
}

export default Navbar