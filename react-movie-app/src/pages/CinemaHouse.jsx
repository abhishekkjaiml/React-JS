import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

const CinemaHouse = () => {

  const cinemas = [
    {
      id: 1,
      name: 'PVR Cinemas',
      location: 'Phoenix Mall, Lucknow',
      movies: 8,
      screens: 6,
    },
    {
      id: 2,
      name: 'INOX',
      location: 'Phoenix United Mall, Lucknow',
      movies: 6,
      screens: 5,
    },
    {
      id: 3,
      name: 'Cinepolis',
      location: 'One Awadh Center, Lucknow',
      movies: 7,
      screens: 6,
    },
    {
      id: 4,
      name: 'Wave Cinemas',
      location: 'Gomti Nagar, Lucknow',
      movies: 5,
      screens: 4,
    },
    {
      id: 5,
      name: 'Carnival Cinemas',
      location: 'Aliganj, Lucknow',
      movies: 4,
      screens: 3,
    },
    {
      id: 6,
      name: 'City Pride Cinema',
      location: 'Hazratganj, Lucknow',
      movies: 5,
      screens: 4,
    },
  ]


  return (
    <div className='cinema-page'>

      {/* =========================
          HEADING
      ========================= */}

      <div className='cinema-header'>

        <div>

          <h1 className='cinema-title'>
            Cinemas
          </h1>

          <p className='cinema-description'>
            Find your favourite cinema and explore movies
            playing near you.
          </p>

        </div>

      </div>


      {/* =========================
          LOCATION
      ========================= */}

      <div className='cinema-location'>

        <LocationOnOutlinedIcon
          sx={{ fontSize: 20 }}
        />

        <span>
          Lucknow
        </span>

      </div>


      {/* =========================
          CINEMA LIST
      ========================= */}

      <div className='cinema-grid'>

        {
          cinemas.map((cinema) => (

            <div
              key={cinema.id}
              className='cinema-card'
            >

              {/* Cinema Icon */}

              <div className='cinema-card-icon'>

                <MovieOutlinedIcon
                  sx={{ fontSize: 28 }}
                />

              </div>


              {/* Cinema Details */}

              <div className='cinema-card-content'>

                <h2 className='cinema-card-title'>
                  {cinema.name}
                </h2>

                <div className='cinema-card-location'>

                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 16 }}
                  />

                  <span>
                    {cinema.location}
                  </span>

                </div>


                {/* Stats */}

                <div className='cinema-card-stats'>

                  <div>
                    <span className='cinema-stat-value'>
                      {cinema.movies}
                    </span>

                    <span className='cinema-stat-label'>
                      Movies
                    </span>
                  </div>


                  <div className='cinema-stat-divider'></div>


                  <div>
                    <span className='cinema-stat-value'>
                      {cinema.screens}
                    </span>

                    <span className='cinema-stat-label'>
                      Screens
                    </span>
                  </div>

                </div>


                {/* Button */}

                <button className='cinema-view-button'>

                  View Movies

                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: 15 }}
                  />

                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default CinemaHouse