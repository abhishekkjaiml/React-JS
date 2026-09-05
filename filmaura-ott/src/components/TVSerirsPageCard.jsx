import { Check, Play, Plus, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTvSeriesWatchlist } from "../context/tvSeries-Watchlist-context";
import { findMyTvSeriesInWatchlist } from "../utility/findInMyWatchlist";

const TVSerirsPageCard = ({ allTVSeries }) => {
  const navigate = useNavigate();

  const {
    tvShowWatchlist,
    tvShowWatchlistDispatch,
  } = useTvSeriesWatchlist();

  const isTvSeriesInMyWatchlist =
    findMyTvSeriesInWatchlist(
      tvShowWatchlist,
      allTVSeries._id
    );

  const OnAddToMyWatchlistClick = (series) => {
    if (!isTvSeriesInMyWatchlist) {
      tvShowWatchlistDispatch({
        type: "TV_SERIES_ADD_TO_WATCHLIST",
        payload: {
          series,
        },
      });
    } else {
      tvShowWatchlistDispatch({
        type: "TV_SERIES_REMOVE_FROM_WATCHLIST",
        payload: {
          id: allTVSeries._id,
        },
      });
    }
  };

  /* =====================================================
     SERIES DETAILS
  ===================================================== */

  const handleSeriesDetails = () => {
    navigate(`/show/${allTVSeries._id}`);
  };

  return (
    <article className="tv-series-card">

      {/* =================================================
          POSTER
      ================================================= */}

      <div
        className="tv-series-card-poster-wrapper"
        onClick={handleSeriesDetails}
      >

        <img
          src={allTVSeries.Poster}
          alt={allTVSeries.Title}
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
            {allTVSeries.Title}
          </h3>

          <div className="tv-series-card-default-meta">

            <span>
              {allTVSeries.Year}
            </span>

            <span>•</span>

            <span>
              {allTVSeries.Rated || "N/A"}
            </span>

            <span>•</span>

            <span>
              {allTVSeries.Runtime || "N/A"}
            </span>

          </div>

        </div>


        {/* =================================================
            HOVER PANEL
        ================================================= */}

        <div className="tv-series-card-hover">

          {/* =================================================
              TITLE
          ================================================= */}

          <h3 className="tv-series-card-hover-title">
            {allTVSeries.Title}
          </h3>


          {/* =================================================
              RATING
          ================================================= */}

          <div className="tv-series-card-rating">

            <Star
              size={14}
              fill="currentColor"
            />

            <span>
              {allTVSeries.imdbRating || "N/A"}
            </span>

            <span className="tv-series-card-imdb">
              IMDb
            </span>

          </div>


          {/* =================================================
              META
          ================================================= */}

          <div className="tv-series-card-hover-meta">

            <span>
              {allTVSeries.Year}
            </span>

            <span>•</span>

            <span>
              {allTVSeries.Rated || "N/A"}
            </span>

            <span>•</span>

            <span>
              {allTVSeries.Runtime || "N/A"}
            </span>

            <span>•</span>

            <span>

              {Array.isArray(allTVSeries.Language)
                ? allTVSeries.Language.map(
                    (language, index) => (
                      <span key={language}>
                        {index > 0 && " • "}
                        {language}
                      </span>
                    )
                  )
                : allTVSeries.Language || "N/A"}

            </span>

          </div>


          {/* =================================================
              GENRE
          ================================================= */}

          <p className="tv-series-card-genre">

            {allTVSeries.Genre?.map(
              (genre, index) => (
                <span key={genre}>
                  {index > 0 && " • "}
                  {genre}
                </span>
              )
            )}

          </p>


          {/* =================================================
              PLOT
          ================================================= */}

          <p className="tv-series-card-plot">
            {allTVSeries.Plot ||
              "No description available."}
          </p>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div
            className="tv-series-card-actions"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* =================================================
                WATCH NOW
            ================================================= */}

            <button
              type="button"
              className="tv-series-card-watch"
              onClick={() =>
                navigate(
                  `/show/watch/${allTVSeries._id}`
                )
              }
            >

              <Play
                size={16}
                fill="currentColor"
              />

              <span>
                Watch Now
              </span>

            </button>


            {/* =================================================
                MY LIST
            ================================================= */}

            <button
              type="button"
              className="tv-series-card-list"
              aria-label="Add to My List"
              onClick={() =>
                OnAddToMyWatchlistClick(
                  allTVSeries
                )
              }
            >

              {!isTvSeriesInMyWatchlist ? (
                <Plus size={20} />
              ) : (
                <Check size={20} />
              )}

            </button>

          </div>

        </div>

      </div>

    </article>
  );
};

export default TVSerirsPageCard;