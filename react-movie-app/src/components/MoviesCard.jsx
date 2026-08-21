import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useFavouriteMovieCart } from "../context/movie-favourite-context";
import { findMovieinCart } from "../utility/findMoviein";


const MoviesCard = ({ movie }) => {
  const navigate = useNavigate();

  const { favouriteMovieDispatch, favourite } = useFavouriteMovieCart();

  const isMovieInCart = findMovieinCart(favourite, movie.imdbID);

  const onMovieClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  const onFavouriteBtnClick = (movie) => {
    if (!isMovieInCart) {
      favouriteMovieDispatch({
        type: "ADD_MOVIE_TO_FAVOURITE",
        payload: {
          movie,
        },
      });
    } else {
      navigate("/favourite");
    }
  };

  return (
    <div>
      <div className="movie-card">
        <div className="movie-card-poster" onClick={onMovieClick}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="movie-card-image"
          />

          <span className="movie-card-type">{movie.Type}</span>
        </div>

        <div className="movie-card-content">
          <div className="movie-card-title">{movie.Title}</div>

          <div className="movie-card-year">{movie.Year}</div>

          <div className="movie-card-actions">
            <button
              onClick={() => onFavouriteBtnClick(movie)}
              className="movie-card-favourite"
            >
              {
                !isMovieInCart ? <FavoriteBorderOutlinedIcon sx={{ fontSize: 18 }} /> : <FavoriteOutlinedIcon sx={{ fontSize: 18 }} />
              }
              
              {
                !isMovieInCart ? 'Favourite' : 'Favourite'
              }
            </button>

            <button
              onClick={(e) => e.stopPropagation()}
              className="movie-card-buy"
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
