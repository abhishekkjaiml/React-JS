import React from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

  const { id } = useParams()
  console.log(id)

  const navigate = useNavigate()

  return (
    <div className='max-w-7xl mx-auto px-6 py-10'>

      {/* Movie Details */}
      <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8'>

        {/* Poster */}
        <div>
          <img
            src='https://m.media-amazon.com/images/M/MV5BMTc5MDQyNjk5OF5BMl5BanBnXkFtZTgwMTQxNjMxMjE@._V1_FMjpg_UX1000_.jpg'
            alt='Movie Poster'
            className='w-full h-105 object-cover rounded-xl'
          />
        </div>

        {/* Details */}
        <div className='flex flex-col justify-center'>

          <p className='text-sm text-red-500 font-semibold mb-2'>
            Action • Adventure • Sci-Fi
          </p>

          <h1 className='text-4xl font-bold text-gray-900'>
            {/* Avengers: Endgame */}
            {id}
          </h1>

          <div className='flex items-center gap-4 mt-4'>

            <div className='flex items-center gap-1'>
              <StarOutlinedIcon
                className='text-yellow-500'
                sx={{ fontSize: 20 }}
              />

              <span className='font-semibold'>
                8.4
              </span>

              <span className='text-sm text-gray-500'>
                / 10
              </span>
            </div>

            <span className='text-gray-300'>
              |
            </span>

            <span className='text-sm text-gray-500'>
              2019
            </span>

            <span className='text-gray-300'>
              |
            </span>

            <span className='text-sm text-gray-500'>
              3h 1m
            </span>

          </div>

          {/* Description */}
          <p className='text-gray-500 leading-7 mt-6 max-w-2xl'>
            After the devastating events of Avengers: Infinity War,
            the remaining Avengers must find a way to bring back
            those who were lost and face their greatest challenge.
          </p>

          {/* Movie Info */}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-6'>

            <div>
              <p className='text-xs text-gray-400'>
                Director
              </p>

              <p className='text-sm font-medium text-gray-800 mt-1'>
                Anthony Russo
              </p>
            </div>

            <div>
              <p className='text-xs text-gray-400'>
                Language
              </p>

              <p className='text-sm font-medium text-gray-800 mt-1'>
                English
              </p>
            </div>

            <div>
              <p className='text-xs text-gray-400'>
                Genre
              </p>

              <p className='text-sm font-medium text-gray-800 mt-1'>
                Action
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className='flex flex-wrap gap-3 mt-8'>

            <button
              onClick={() => navigate('/booking')}
              className='flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-red-600 transition'
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
              Book Tickets
            </button>

            <button className='flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:border-gray-400 transition'>
              <PlayCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
              Watch Trailer
            </button>

            <button className='flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:text-red-500 hover:border-red-400 transition'>
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 20 }} />
              Favourite
            </button>

          </div>

        </div>

      </div>

      {/* Cast */}
      <div className='mt-14'>

        <h2 className='text-2xl font-bold text-gray-900'>
          Top Cast
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-6'>

          <div className='border border-gray-200 rounded-xl p-4'>
            <div className='w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center'>
              👨🏻
            </div>

            <h3 className='font-semibold text-sm mt-3'>
              Robert Downey Jr.
            </h3>

            <p className='text-xs text-gray-500 mt-1'>
              Tony Stark
            </p>
          </div>

          <div className='border border-gray-200 rounded-xl p-4'>
            <div className='w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center'>
              👨🏻
            </div>

            <h3 className='font-semibold text-sm mt-3'>
              Chris Evans
            </h3>

            <p className='text-xs text-gray-500 mt-1'>
              Steve Rogers
            </p>
          </div>

          <div className='border border-gray-200 rounded-xl p-4'>
            <div className='w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center'>
              👨🏻
            </div>

            <h3 className='font-semibold text-sm mt-3'>
              Mark Ruffalo
            </h3>

            <p className='text-xs text-gray-500 mt-1'>
              Bruce Banner
            </p>
          </div>

          <div className='border border-gray-200 rounded-xl p-4'>
            <div className='w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center'>
              👩🏻
            </div>

            <h3 className='font-semibold text-sm mt-3'>
              Scarlett Johansson
            </h3>

            <p className='text-xs text-gray-500 mt-1'>
              Natasha Romanoff
            </p>
          </div>

          <div className='border border-gray-200 rounded-xl p-4'>
            <div className='w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center'>
              👨🏻
            </div>

            <h3 className='font-semibold text-sm mt-3'>
              Chris Hemsworth
            </h3>

            <p className='text-xs text-gray-500 mt-1'>
              Thor
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default MovieDetails