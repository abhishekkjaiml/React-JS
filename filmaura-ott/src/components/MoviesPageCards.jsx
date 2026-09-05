import { Check, Play, Plus, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMovieWatchlist } from "../context/movie-watchlist-context";
import { findMyMoviesInWatchlist } from "../utility/findInMyWatchlist";

const MoviesPageCards = ({ moviesPageItem }) => {
  const navigate = useNavigate();

  /* =====================================================
     MOVIE DETAILS
  ===================================================== */

  const { movieWatchlist, movieWatchlistDispatch } = useMovieWatchlist();

  const isMoviesInWatchlist = findMyMoviesInWatchlist(
    movieWatchlist,
    moviesPageItem._id,
  );

  const handleMovieDetails = () => {
    navigate(`/movie/${moviesPageItem._id}`);
  };

  const OnAddToMyWatchlistClick = (movie) => {
    !isMoviesInWatchlist
      ? movieWatchlistDispatch({
          type: "MOVIES_ADD_TO_WATCHLIST",
          payload: {
            movie,
          },
        })
      : movieWatchlistDispatch({
          type: "MOVIES_REMOVE_FROM_WATCHLIST",
          payload: {
            id: moviesPageItem._id,
          },
        });
  };

  const posterImage =
    moviesPageItem.Poster?.PosterData1?.length > 0
      ? moviesPageItem.Poster.PosterData1
      : moviesPageItem.Poster?.PosterData2?.length > 0
        ? moviesPageItem.Poster.PosterData2
        : moviesPageItem.Poster?.PosterData1;

  return (
    <article className="movies-card">
      {/* =================================================
          POSTER
      ================================================= */}

      <div className="movies-card-poster-wrapper" onClick={handleMovieDetails}>
        <img
          src={posterImage}
          alt={moviesPageItem.Title}
          className="movies-card-poster"
        />

        {/* =================================================
            GRADIENT
        ================================================= */}

        <div className="movies-card-gradient" />

        {/* =================================================
            DEFAULT INFO
        ================================================= */}

        <div className="movies-card-default-info">
          <h3 className="movies-card-default-title">{moviesPageItem.Title}</h3>

          <div className="movies-card-default-meta">
            <span>{moviesPageItem.Year}</span>

            <span>•</span>

            <span>{moviesPageItem.Rated || "N/A"}</span>

            <span>•</span>

            <span>{moviesPageItem.Runtime || "N/A"}</span>
          </div>
        </div>

        {/* =================================================
            HOVER CONTENT
        ================================================= */}

        <div className="movies-card-hover">
          {/* Title */}

          <h3 className="movies-card-hover-title">{moviesPageItem.Title}</h3>

          {/* Rating */}

          <div className="movies-card-rating">
            <Star size={14} fill="currentColor" />

            <span>{moviesPageItem.imdbRating || "N/A"}</span>

            <span className="movies-card-imdb">IMDb</span>
          </div>

          {/* Meta */}

          <div className="movies-card-hover-meta">
            <span>{moviesPageItem.Year}</span>

            <span>•</span>

            <span>{moviesPageItem.Rated || "N/A"}</span>

            <span>•</span>

            <span>{moviesPageItem.Runtime || "N/A"}</span>

            {/* <span>•</span> */}

            {/* <span>
              {moviesPageItem.Language || "N/A"}
            </span> */}
            <span>
              {moviesPageItem.Language?.map((language, index) => (
                <span key={language}>
                  {index > 0 && " • "}
                  {language}
                </span>
              ))}
            </span>
          </div>

          {/* Genre */}

          {/* <p className="movies-card-genre">
            {moviesPageItem.Genre `,`  || "Genre unavailable"}
          </p> */}

          <p className="movies-card-genre">
            {moviesPageItem.Genre?.length > 0 ? moviesPageItem.Genre?.map(
              (genre, index) => (
                <span key={genre}>
                  {index > 0 && " • "}
                  {genre}
                </span>
              )
            ): "Genre unavailable"}
          </p>

          {/* Plot */}

          <p className="movies-card-plot">
            {moviesPageItem.Plot || "No description available."}
          </p>

          {/* Actions */}

          <div
            className="movies-card-actions"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Watch */}

            <button
              type="button"
              onClick={() => navigate(`/movie/watch/${moviesPageItem._id}`)}
              className="movies-card-watch"
            >
              <Play size={16} fill="currentColor" />

              <span>Watch Now</span>
            </button>

            {/* My List */}

            <button
              type="button"
              className="movies-card-list"
              aria-label="Add to My List"
              onClick={() => OnAddToMyWatchlistClick(moviesPageItem)}
            >
              {!isMoviesInWatchlist ? <Plus size={20} /> : <Check size={20} />}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MoviesPageCards;
