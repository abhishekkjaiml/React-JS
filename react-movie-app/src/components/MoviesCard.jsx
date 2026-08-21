import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

const MoviesCard = ({ movie }) => {
  const navigate = useNavigate();

  const onMovieClick = () => {
    navigate(`/movie/${movie.imdbID}`);
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
              onClick={(e) => e.stopPropagation()}
              className="movie-card-favourite"
            >
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 18 }} />
              Favourite
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
