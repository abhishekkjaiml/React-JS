import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { API_URL } from "../context/movie-context";
import { getMovieDetails } from "../api/getMoviesDetails";

const MovieDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState({
    show: false,
    msg: "",
  });

  useEffect(() => {
    getMovieDetails(
      `${API_URL}&i=${id}&plot=full`,
      setMovie,
      setIsLoading,
      setIsError,
    );
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-details-loading">
        <div className="movie-details-spinner"></div>

        <p className="movie-details-loading-text">Loading movie details...</p>
      </div>
    );
  }

  if (isError.show || !movie) {
    return (
      <div className="movie-details-error">
        <p className="movie-details-error-text">
          {isError.msg || "Movie not found"}
        </p>

        <button
          onClick={() => navigate("/")}
          className="movie-details-back-button"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="movie-details-container">
      {/* Movie Details */}

      <div className="movie-details-layout">
        {/* Poster */}

        <div>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="movie-details-poster"
          />
        </div>

        {/* Details */}

        <div className="movie-details-content">
          <p className="movie-details-genre">{movie.Genre}</p>

          <h1 className="movie-details-title">{movie.Title}</h1>

          <div className="movie-details-meta">
            <div className="movie-details-rating">
              <StarOutlinedIcon
                className="text-yellow-500"
                sx={{ fontSize: 20 }}
              />

              <span className="movie-details-rating-value">
                {movie.imdbRating}
              </span>

              <span className="movie-details-meta-text">/ 10</span>
            </div>

            <span className="movie-details-meta-separator">|</span>

            <span className="movie-details-meta-text">{movie.Year}</span>

            <span className="movie-details-meta-separator">|</span>

            <span className="movie-details-meta-text">{movie.Runtime}</span>
          </div>

          {/* Description */}

          <p className="movie-details-description">{movie.Plot}</p>

          {/* Movie Info */}

          <div className="movie-details-info">
            <div>
              <p className="movie-details-info-label">Director</p>

              <p className="movie-details-info-value">{movie.Director}</p>
            </div>

            <div>
              <p className="movie-details-info-label">Language</p>

              <p className="movie-details-info-value">{movie.Language}</p>
            </div>

            <div>
              <p className="movie-details-info-label">Genre</p>

              <p className="movie-details-info-value">{movie.Genre}</p>
            </div>

            <div>
              <p className="movie-details-info-label">Released</p>

              <p className="movie-details-info-value">{movie.Released}</p>
            </div>

            <div>
              <p className="movie-details-info-label">Country</p>

              <p className="movie-details-info-value">{movie.Country}</p>
            </div>

            <div>
              <p className="movie-details-info-label">Rated</p>

              <p className="movie-details-info-value">{movie.Rated}</p>
            </div>
          </div>

          {/* Buttons */}

          <div className="movie-details-buttons">
            <button
              onClick={() => navigate("/booking")}
              className="movie-book-button"
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
              Book Tickets
            </button>

            <button
              onClick={() => {
                if (movie.Trailer) {
                  window.open(movie.Trailer, "_blank");
                }
              }}
              className="movie-action-button movie-trailer-button"
            >
              <PlayCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
              Watch Trailer
            </button>

            <button className="movie-action-button movie-favourite-button">
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 20 }} />
              Favourite
            </button>
          </div>
        </div>
      </div>

      {/* Cast */}

      <div className="movie-cast-section">
        <h2 className="movie-section-title">Top Cast</h2>

        <div className="movie-cast-grid">
          {movie.Actors?.split(",")
            .slice(0, 5)
            .map((actor, index) => (
              <div key={index} className="movie-cast-card">
                <div className="movie-cast-avatar">
                  <span className="movie-cast-avatar-text">👤</span>
                </div>

                <h3 className="movie-cast-name">{actor.trim()}</h3>

                <p className="movie-cast-role">Cast Member</p>
              </div>
            ))}
        </div>
      </div>

      {/* Ratings */}

      {movie.Ratings?.length > 0 && (
        <div className="movie-ratings-section">
          <h2 className="movie-section-title">Ratings</h2>

          <div className="movie-ratings-grid">
            {movie.Ratings.map((rating) => (
              <div key={rating.Source} className="movie-rating-card">
                <p className="movie-rating-source">{rating.Source}</p>

                <p className="movie-rating-value">{rating.Value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Extra Details */}

      <div className="movie-extra-details">
        <div className="movie-extra-card">
          <p className="movie-extra-label">Writer</p>

          <p className="movie-extra-value">{movie.Writer}</p>
        </div>

        <div className="movie-extra-card">
          <p className="movie-extra-label">Awards</p>

          <p className="movie-extra-value">{movie.Awards}</p>
        </div>

        <div className="movie-extra-card">
          <p className="movie-extra-label">IMDb Votes</p>

          <p className="movie-extra-value">{movie.imdbVotes}</p>
        </div>

        <div className="movie-extra-card">
          <p className="movie-extra-label">Box Office</p>

          <p className="movie-extra-value">{movie.BoxOffice || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
