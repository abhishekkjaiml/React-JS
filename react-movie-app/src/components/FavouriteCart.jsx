import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { useFavouriteMovieCart } from "../context/movie-favourite-context";

const FavouriteCart = ({ favMovie }) => {

  const { favouriteMovieDispatch } = useFavouriteMovieCart()

  const onMovieRemoveBtnClick = () => {
    favouriteMovieDispatch({
      type: 'REMOVE_MOVIE_FROM_FAVOURITE',
      payload:{
        id: favMovie.imdbID
      }
    })
  }
  return (
    <div className="favourite-card">
      {/* Poster */}

      <div className="favourite-poster-wrapper">
        <img
          src={favMovie.Poster}
          alt={favMovie.Title}
          className="favourite-poster"
        />

        <div className="favourite-poster-overlay"></div>

        <span className="favourite-type">{favMovie.Type}</span>

        <button className="favourite-heart-button">
          <FavoriteOutlinedIcon sx={{ fontSize: 19 }} />
        </button>
      </div>

      {/* Details */}

      <div className="favourite-content">
        <div>
          <h2 className="favourite-title">{favMovie.Title}</h2>

          <div className="favourite-meta">
            <span>{favMovie.Year}</span>

            <span className="favourite-dot">•</span>

            <span>Movie</span>
          </div>

          {/* Rating */}

          <div className="favourite-rating">
            <StarOutlinedIcon sx={{ fontSize: 18 }} />

            <span>{favMovie.imdbRating || "N/A"}</span>

            <span className="favourite-rating-label">IMDb</span>
          </div>
        </div>

        {/* Actions */}

        <div className="favourite-actions">
          <button className="favourite-watch-button">
            <PlayCircleOutlineOutlinedIcon sx={{ fontSize: 18 }} />
            Details
          </button>

          <button className="favourite-buy-button">
            <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
            Buy Ticket
          </button>

          <button 
            onClick={onMovieRemoveBtnClick}
            className="favourite-remove-button"
          >
            <DeleteOutlineOutlinedIcon sx={{ fontSize: 18 }} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCart;
