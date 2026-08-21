import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate, useParams } from 'react-router-dom';

const MoviesCard = ({movie}) => {

    const { imdbID } = useParams()

    const navigate = useNavigate()
  return (
    <div>
        <div className='w-60 border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition'>

            <div 
                className='relative hover:cursor-pointer p-1'
                onClick={() => navigate(`/movie/${imdbID}`)}
            >
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className='w-full h-80 object-cover rounded'
                />

                <span className='absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded'>
                    {movie.Type}
                </span>
            </div>

            <div className='p-4'>

                <div className='text-base font-semibold text-gray-800 truncate'>
                    {movie.Title}
                </div>

                <div className='text-sm text-gray-500 mt-1'>
                    {movie.Year}
                </div>

                <div className='flex gap-2 mt-4'>

                    <button className='flex items-center justify-center gap-1 border border-gray-300 rounded-md px-2 py-2 text-sm text-gray-600 hover:text-red-500 hover:border-red-400 transition'>
                        <FavoriteBorderOutlinedIcon sx={{fontSize: 18}} />
                        Favourite
                    </button>

                    <button className='flex items-center justify-center gap-1 bg-red-500 text-white rounded-md px-3 py-2 text-sm hover:bg-red-600 transition'>
                        <ShoppingCartOutlinedIcon sx={{fontSize: 18}} />
                        Buy Now
                    </button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default MoviesCard