import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import allMovies from "../db/Marvel/newMovies.json";
import trendingMovies from "../db/HomeTrandingMovies.json";

import { useMovieWatchlist } from "../context/movie-watchlist-context";
import { findMyMoviesInWishlist } from "../utility/findInMyWishlist";

import { Play, Plus, Star, ArrowLeft, Check } from "lucide-react";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  const { movieWatchlist, movieWatchlistDispatch } = useMovieWatchlist();

  const [moviesData, setMoviesData] = useState(null);

  /* =====================================================
     SCROLL TO TOP
  ===================================================== */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  /* =====================================================
     FIND MOVIE
  ===================================================== */

  useEffect(() => {
    if (!id) return;

    const allCompleteAllDB = [...allMovies, ...trendingMovies];

    const selectedMovie = allCompleteAllDB.find(
      (item) => String(item._id) === String(id),
    );

    setMoviesData(selectedMovie || null);
  }, [id]);

  /* =====================================================
     MOVIE NOT FOUND
  ===================================================== */

  if (!moviesData) {
    return (
      <div className="movie-details-not-found">
        <div className="movie-details-not-found-content">
          <h1>Movie not found</h1>

          <p>The movie you're looking for doesn't exist.</p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="movie-details-not-found-btn"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  /* =====================================================
     WATCHLIST
  ===================================================== */

  const isMoviesInWishlist = findMyMoviesInWishlist(
    movieWatchlist,
    moviesData._id,
  );

  const OnAddToMyWatchlistClick = (movie) => {
    if (!isMoviesInWishlist) {
      movieWatchlistDispatch({
        type: "MOVIES_ADD_TO_WISHLIST",
        payload: {
          movie,
        },
      });
    } else {
      movieWatchlistDispatch({
        type: "MOVIES_REMOVE_FROM_WISHLIST",
        payload: {
          id: moviesData._id,
        },
      });
    }
  };

  /* =====================================================
     LANGUAGE
  ===================================================== */

  const movieLanguages = Array.isArray(moviesData.Language)
    ? moviesData.Language
    : moviesData.Language
      ? [moviesData.Language]
      : [];

  return (
    <div className="movie-details-page">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="movie-details-hero">
        {/* Background */}

        <img
          src={moviesData.Poster?.PosterData1}
          alt={moviesData.Title}
          className="movie-details-background"
        />

        {/* Overlay */}

        <div className="movie-details-overlay" />

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="movie-details-content">
          {/* Back */}

          <button
            type="button"
            className="movie-details-back"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />

            <span>Back</span>
          </button>

          {/* Movie Information */}

          <div className="movie-details-info">
            {/* Type */}

            <span className="movie-details-type">
              {moviesData.Type || "Movie"}
            </span>

            {/* Title */}

            <h1 className="movie-details-title">{moviesData.Title}</h1>

            {/* Meta */}

            <div className="movie-details-meta">
              <span>{moviesData.Year || "N/A"}</span>

              <span>•</span>

              <span>{moviesData.Rated || "N/A"}</span>

              <span>•</span>

              <span>{moviesData.Runtime || "N/A"}</span>

              {movieLanguages.length > 0 && (
                <>
                  <span>•</span>

                  <span>{movieLanguages.join(" • ")}</span>
                </>
              )}
            </div>

            {/* Rating */}

            <div className="movie-details-rating">
              <Star size={18} fill="currentColor" />

              <span>{moviesData.imdbRating || "N/A"}</span>

              <span className="movie-details-imdb">IMDb</span>
            </div>

            {/* Plot */}

            <p className="movie-details-plot">
              {moviesData.Plot || "No description available."}
            </p>

            {/* Genre */}

            <div className="movie-details-genre">
              {moviesData.Genre.split(",").map((genre, index) => (
                <span key={`${genre}-${index}`}>{genre.trim()}</span>
              ))}
            </div>

            {/* <div className="movie-details-genre">
              {
                moviesData.Genre.map((genre, index) => (
                  <span key={genre || index}>
                    {genre}
                  </span>
                ))
              }
            </div> */}

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div className="movie-details-actions">
              {/* Watch Now */}

              <button
                type="button"
                className="movie-details-watch"
                onClick={() => navigate(`/movie/watch/${moviesData._id}`)}
              >
                <span className="movie-details-watch-icon">
                  <Play size={17} fill="currentColor" />
                </span>

                <span>Watch Now</span>
              </button>

              {/* Add To List */}

              <button
                type="button"
                className={`movie-details-list ${
                  isMoviesInWishlist ? "movie-details-list-active" : ""
                }`}
                onClick={() => OnAddToMyWatchlistClick(moviesData)}
                aria-label={
                  isMoviesInWishlist ? "Remove from My List" : "Add to My List"
                }
              >
                {isMoviesInWishlist ? <Check size={21} /> : <Plus size={21} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          DETAILS SECTION
      ================================================= */}

      <section className="movie-details-bottom">
        <div className="movie-details-grid">
          {/* Director */}

          <div className="movie-detail-box">
            <span>Director</span>

            <p>{moviesData.Director || "N/A"}</p>
          </div>

          {/* Writer */}

          <div className="movie-detail-box">
            <span>Writer</span>

            <p>{moviesData.Writer || "N/A"}</p>
          </div>

          {/* Studio */}

          <div className="movie-detail-box">
            <span>Studio</span>

            <p>{moviesData.Studio || "N/A"}</p>
          </div>

          {/* Country */}

          <div className="movie-detail-box">
            <span>Country</span>

            <p>{moviesData.Country || "N/A"}</p>
          </div>

          {/* Box Office */}

          <div className="movie-detail-box">
            <span>Box Office</span>

            <p>{moviesData.BoxOffice || "N/A"}</p>
          </div>

          {/* Released */}

          <div className="movie-detail-box">
            <span>Released</span>

            <p>{moviesData.Released || "N/A"}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
