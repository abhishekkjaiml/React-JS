import { Play, Star, Trash } from "lucide-react";
import { useMovieWatchlist } from "../context/movie-watchlist-context";
import { useNavigate } from "react-router-dom";

const WatchlistMoviesPageCard = () => {
  const { movieWatchlist, movieWatchlistDispatch } = useMovieWatchlist();

  const navigate = useNavigate();

  const handleRemoveFromWatchlist = (moviesId) => {
    movieWatchlistDispatch({
      type: "MOVIES_REMOVE_FROM_WATCHLIST",
      payload: {
        id: moviesId,
      },
    });
  };

  return (
    <div>
      {movieWatchlist?.length > 0 &&
        movieWatchlist.map((items) => {
          const posterImage =
            items.Poster?.PosterData1?.length > 0
              ? items.Poster.PosterData1
              : items.Poster?.PosterData2?.length > 0
                ? items.Poster.PosterData2
                : items.Poster?.PosterData1;
          return (
            <article className="movies-card" key={items._id}>
              {/* =================================================
          POSTER
      ================================================= */}

              <div
                className="movies-card-poster-wrapper"
                onClick={() => navigate(`/movie/${items._id}`)}
              >
                <img
                  src={posterImage}
                  alt={items.Title}
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
                  <h3 className="movies-card-default-title">{items.Title}</h3>

                  <div className="movies-card-default-meta">
                    <span>{items.Year}</span>

                    <span>•</span>

                    <span>{items.Rated || "N/A"}</span>

                    <span>•</span>

                    <span>{items.Runtime || "N/A"}</span>
                  </div>
                </div>

                {/* =================================================
            HOVER CONTENT
        ================================================= */}

                <div className="movies-card-hover">
                  {/* Title */}

                  <h3 className="movies-card-hover-title">{items.Title}</h3>

                  {/* Rating */}

                  <div className="movies-card-rating">
                    <Star size={14} fill="currentColor" />

                    <span>{items.imdbRating || "N/A"}</span>

                    <span className="movies-card-imdb">IMDb</span>
                  </div>

                  {/* Meta */}

                  <div className="movies-card-hover-meta">
                    <span>{items.Year}</span>

                    <span>•</span>

                    <span>{items.Rated || "N/A"}</span>

                    <span>•</span>

                    <span>{items.Runtime || "N/A"}</span>

                    <span>•</span>

                    {/* <span>
              {moviesPageItem.Language || "N/A"}
            </span> */}
                    <span>
                      {items.Language?.map((language, index) => (
                        <span key={language}>
                          {index > 0 && " • "}
                          {language}
                        </span>
                      ))}
                    </span>
                  </div>

                  {/* Genre */}

                  <p className="movies-card-genre">
                    {items.Genre || "Genre unavailable"}
                  </p>

                  {/* Plot */}

                  <p className="movies-card-plot">
                    {items.Plot || "No description available."}
                  </p>

                  {/* Actions */}

                  <div
                    className="movies-card-actions"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Watch */}

                    <button
                      type="button"
                      onClick={() => navigate(`/movie/watch/${items._id}`)}
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
                      onClick={() => handleRemoveFromWatchlist(items._id)}
                    >
                      <Trash />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default WatchlistMoviesPageCard;
