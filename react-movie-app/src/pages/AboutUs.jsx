import React from 'react'

const AboutUs = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-12'>

      {/* Hero */}
      <div className='text-center max-w-3xl mx-auto'>

        <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>
          About <span className='text-red-500'>MovieApp</span>
        </h1>

        <p className='text-gray-500 mt-4 leading-7'>
          MovieApp is a simple and convenient movie ticket booking platform
          designed to help you discover movies, explore cinemas and book
          your favourite seats with ease.
        </p>

      </div>

      {/* Features */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>

        <div className='border border-gray-200 rounded-xl p-6'>
          <h2 className='text-lg font-semibold text-gray-800'>
            🎬 Discover Movies
          </h2>

          <p className='text-sm text-gray-500 mt-3 leading-6'>
            Explore movies, check ratings, genres, release years and
            other important movie details.
          </p>
        </div>

        <div className='border border-gray-200 rounded-xl p-6'>
          <h2 className='text-lg font-semibold text-gray-800'>
            🎟️ Easy Booking
          </h2>

          <p className='text-sm text-gray-500 mt-3 leading-6'>
            Find your preferred cinema, choose a showtime and select
            your favourite seats in just a few steps.
          </p>
        </div>

        <div className='border border-gray-200 rounded-xl p-6'>
          <h2 className='text-lg font-semibold text-gray-800'>
            💺 Choose Your Seat
          </h2>

          <p className='text-sm text-gray-500 mt-3 leading-6'>
            Select available seats from an interactive cinema seating
            layout before confirming your booking.
          </p>
        </div>

      </div>

      {/* Mission */}
      <div className='mt-12 bg-gray-50 rounded-2xl p-8 md:p-10 text-center'>

        <h2 className='text-2xl font-bold text-gray-900'>
          Our Mission
        </h2>

        <p className='max-w-3xl mx-auto text-gray-500 mt-4 leading-7'>
          Our goal is to make the movie-going experience simple,
          convenient and enjoyable — from discovering a movie to
          getting your seat confirmed.
        </p>

      </div>

    </div>
  )
}

export default AboutUs