const OffersPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-10'>

      {/* Heading */}
      <div className='mb-8'>

        <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
          Offers & Deals
        </h1>

        <p className='text-sm text-gray-500 mt-2'>
          Enjoy exciting offers and save more on your movie bookings.
        </p>

      </div>

      {/* Offers */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

        {/* Offer 1 */}
        <div className='border border-gray-200 rounded-xl p-6 hover:shadow-md transition'>

          <div className='flex items-center justify-between'>

            <span className='text-3xl'>
              🎟️
            </span>

            <span className='text-xs font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full'>
              20% OFF
            </span>

          </div>

          <h2 className='text-lg font-semibold text-gray-800 mt-5'>
            Movie Night Special
          </h2>

          <p className='text-sm text-gray-500 mt-2 leading-6'>
            Get 20% off on your movie ticket booking.
            Make your movie night even better.
          </p>

          <div className='flex items-center justify-between mt-5'>

            <span className='text-sm font-medium text-gray-700'>
              Code: MOVIE20
            </span>

            <button className='text-sm font-semibold text-red-500 hover:text-red-600'>
              Apply
            </button>

          </div>

        </div>

        {/* Offer 2 */}
        <div className='border border-gray-200 rounded-xl p-6 hover:shadow-md transition'>

          <div className='flex items-center justify-between'>

            <span className='text-3xl'>
              🍿
            </span>

            <span className='text-xs font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full'>
              ₹100 OFF
            </span>

          </div>

          <h2 className='text-lg font-semibold text-gray-800 mt-5'>
            Weekend Offer
          </h2>

          <p className='text-sm text-gray-500 mt-2 leading-6'>
            Get flat ₹100 off on selected weekend movie
            bookings.
          </p>

          <div className='flex items-center justify-between mt-5'>

            <span className='text-sm font-medium text-gray-700'>
              Code: WEEKEND100
            </span>

            <button className='text-sm font-semibold text-red-500 hover:text-red-600'>
              Apply
            </button>

          </div>

        </div>

        {/* Offer 3 */}
        <div className='border border-gray-200 rounded-xl p-6 hover:shadow-md transition'>

          <div className='flex items-center justify-between'>

            <span className='text-3xl'>
              ⭐
            </span>

            <span className='text-xs font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full'>
              15% OFF
            </span>

          </div>

          <h2 className='text-lg font-semibold text-gray-800 mt-5'>
            First Booking
          </h2>

          <p className='text-sm text-gray-500 mt-2 leading-6'>
            New to MovieApp? Get 15% off on your first
            movie ticket booking.
          </p>

          <div className='flex items-center justify-between mt-5'>

            <span className='text-sm font-medium text-gray-700'>
              Code: WELCOME15
            </span>

            <button className='text-sm font-semibold text-red-500 hover:text-red-600'>
              Apply
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default OffersPage