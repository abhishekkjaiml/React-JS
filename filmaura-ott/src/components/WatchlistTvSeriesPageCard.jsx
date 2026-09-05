import { Check, Play, Plus, Star, Trash } from "lucide-react";
import { useTvSeriesWatchlist } from "../context/tvSeries-Watchlist-context";
import { useNavigate } from "react-router-dom";

const WatchlistTvSeriesPageCard = () => {
  const { tvShowWatchlist, tvShowWatchlistDispatch } = useTvSeriesWatchlist();
  const navigate = useNavigate();

  const handleRemoveFromWatchlist = (seriesId) => {
    tvShowWatchlistDispatch({
      type: "TV_SERIES_REMOVE_FROM_WATCHLIST",
      payload: {
        id: seriesId,
      },
    });
  };

  return (
    <div>
      {tvShowWatchlist?.length > 0 && (
        tvShowWatchlist.map((items) => {
          return (
            <article className="tv-series-card" key={items._id}>
              {/* =================================================
          POSTER
      ================================================= */}

              <div
                className="tv-series-card-poster-wrapper"
                onClick={() => navigate(`/show/${items._id}`)}
              >
                <img
                  src={items.Poster}
                  alt={items.Title}
                  className="tv-series-card-poster"
                />

                {/* =================================================
            GRADIENT
        ================================================= */}

                <div className="tv-series-card-gradient" />

                {/* =================================================
            DEFAULT INFO
        ================================================= */}

                <div className="tv-series-card-default-info">
                  <h3 className="tv-series-card-default-title">
                    {items.Title}
                  </h3>

                  <div className="tv-series-card-default-meta">
                    <span>{items.Year}</span>

                    <span>•</span>

                    <span>{items.Rated || "N/A"}</span>

                    <span>•</span>

                    <span>{items.Runtime || "N/A"}</span>
                  </div>
                </div>

                {/* =================================================
            HOVER PANEL
        ================================================= */}

                <div className="tv-series-card-hover">
                  {/* =================================================
              TITLE
          ================================================= */}

                  <h3 className="tv-series-card-hover-title">{items.Title}</h3>

                  {/* =================================================
              RATING
          ================================================= */}

                  <div className="tv-series-card-rating">
                    <Star size={14} fill="currentColor" />

                    <span>{items.imdbRating || "N/A"}</span>

                    <span className="tv-series-card-imdb">IMDb</span>
                  </div>

                  {/* =================================================
              META
          ================================================= */}

                  <div className="tv-series-card-hover-meta">
                    <span>{items.Year}</span>

                    <span>•</span>

                    <span>{items.Rated || "N/A"}</span>

                    <span>•</span>

                    <span>{items.Runtime || "N/A"}</span>

                    <span>•</span>

                    <span>
                      {Array.isArray(items.Language)
                        ? items.Language.map((language, index) => (
                            <span key={language}>
                              {index > 0 && " • "}
                              {language}
                            </span>
                          ))
                        : items.Language || "N/A"}
                    </span>
                  </div>

                  {/* =================================================
              GENRE
          ================================================= */}

                  <p className="tv-series-card-genre">
                    {items.Genre?.map((genre, index) => (
                      <span key={genre}>
                        {index > 0 && " • "}
                        {genre}
                      </span>
                    ))}
                  </p>

                  {/* =================================================
              PLOT
          ================================================= */}

                  <p className="tv-series-card-plot">
                    {items.Plot || "No description available."}
                  </p>

                  {/* =================================================
              ACTIONS
          ================================================= */}

                  <div
                    className="tv-series-card-actions"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {/* =================================================
                WATCH NOW
            ================================================= */}

                    <button
                      type="button"
                      className="tv-series-card-watch"
                      onClick={() => navigate(`/show/watch/${items._id}`)}
                    >
                      <Play size={16} fill="currentColor" />

                      <span>Watch Now</span>
                    </button>

                    {/* =================================================
                MY LIST
            ================================================= */}

                    <button
                      type="button"
                      className="tv-series-card-list"
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
        })
      )}
    </div>
  );
};

export default WatchlistTvSeriesPageCard;
