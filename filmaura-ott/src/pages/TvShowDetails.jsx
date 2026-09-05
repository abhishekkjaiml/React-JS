import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import allSeries from "../db/Marvel/Series/moon_knight.json";
import { useTvSeriesWatchlist } from "../context/tvSeries-Watchlist-context";

import { findMyTvSeriesInWatchlist } from "../utility/findInMyWatchlist";

import { Play, Plus, Star, ArrowLeft, Check, ChevronRight } from "lucide-react";

const TvShowDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, [id]);

  const { tvShowWatchlist, tvShowWatchlistDispatch } = useTvSeriesWatchlist();

  const [tvShowData, setTvShowData] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  /* =====================================================
     GET TV SHOW
  ===================================================== */

  useEffect(() => {
    if (!id) return;

    const selectedTvShow = allSeries.find(
      (item) => String(item._id) === String(id),
    );

    setTvShowData(selectedTvShow || null);
  }, [id]);

  /* =====================================================
     DEFAULT SEASON
  ===================================================== */

  useEffect(() => {
    if (tvShowData?.SeriesData?.length > 0) {
      setSelectedSeason(tvShowData.SeriesData[0]);
    }
  }, [tvShowData]);

  /* =====================================================
     NOT FOUND
  ===================================================== */

  if (!tvShowData) {
    return (
      <div className="tv-details-not-found">
        <div className="tv-not-found-icon">
          <Play size={24} />
        </div>

        <h1>TV Show Not Found</h1>

        <p>The TV show you're looking for doesn't exist.</p>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="tv-not-found-back"
        >
          <ArrowLeft size={17} />
          <span>Back</span>
        </button>
      </div>
    );
  }

  /* =====================================================
     WATCHLIST
  ===================================================== */

  const isTvSeriesInMyWatchlist = findMyTvSeriesInWatchlist(
    tvShowWatchlist,
    tvShowData._id,
  );

  /* =====================================================
     ADD / REMOVE WATCHLIST
  ===================================================== */

  const handleWatchlist = () => {
    if (!isTvSeriesInMyWatchlist) {
      tvShowWatchlistDispatch({
        type: "TV_SERIES_ADD_TO_WATCHLIST",
        payload: {
          series: tvShowData,
        },
      });
    } else {
      tvShowWatchlistDispatch({
        type: "TV_SERIES_REMOVE_FROM_WATCHLIST",
        payload: {
          id: tvShowData._id,
        },
      });
    }
  };

  /* =====================================================
     EPISODES
  ===================================================== */

  const episodes = selectedSeason?.Episode || [];

  /* =====================================================
     LANGUAGE
  ===================================================== */

  const languages = Array.isArray(tvShowData.Language)
    ? tvShowData.Language
    : tvShowData.Language
      ? [tvShowData.Language]
      : [];

  /* =====================================================
     GENRE
  ===================================================== */

  const genres = Array.isArray(tvShowData.Genre)
    ? tvShowData.Genre
    : tvShowData.Genre
      ? [tvShowData.Genre]
      : [];

  return (
    <div className="tv-details-page">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="tv-details-hero">
        <img
          src={tvShowData.Poster}
          alt={tvShowData.Title}
          className="tv-details-background"
        />

        <div className="tv-details-overlay" />

        <div className="tv-details-content">
          {/* Back */}

          <button
            type="button"
            className="tv-details-back"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={17} />
            <span>Back</span>
          </button>

          {/* Information */}

          <div className="tv-details-info">
            <span className="tv-details-type">
              {tvShowData.Type || "TV Series"}
            </span>

            <h1 className="tv-details-title">{tvShowData.Title}</h1>

            <div className="tv-details-meta">
              <span>{tvShowData.Year || "N/A"}</span>

              <span>•</span>

              <span>{tvShowData.Rated || "N/A"}</span>

              <span>•</span>

              <span>{tvShowData.Runtime || "N/A"}</span>

              {languages.length > 0 && (
                <>
                  <span>•</span>

                  <span>{languages.join(" • ")}</span>
                </>
              )}
            </div>

            {/* Rating */}

            <div className="tv-details-rating">
              <Star size={17} fill="currentColor" />

              <span>{tvShowData.imdbRating || "N/A"}</span>

              <span className="tv-details-imdb">IMDb</span>
            </div>

            {/* Plot */}

            <p className="tv-details-plot">
              {tvShowData.Plot || "No description available."}
            </p>

            {/* Genres */}

            {genres.length > 0 && (
              <div className="tv-details-genres">
                {genres.map((genre, index) => (
                  <span key={`${genre}-${index}`}>{genre}</span>
                ))}
              </div>
            )}

            {/* Actions */}

            <div className="tv-details-actions">
              <button
                type="button"
                className="tv-details-watch"
                onClick={() => navigate(`/movie/watch/${tvShowData._id}`)}
              >
                <Play size={17} fill="currentColor" />

                <span>Watch Now</span>
              </button>

              <button
                type="button"
                className="tv-details-list"
                onClick={handleWatchlist}
                aria-label={
                  isTvSeriesInMyWatchlist
                    ? "Remove from My List"
                    : "Add to My List"
                }
              >
                {isTvSeriesInMyWatchlist ? (
                  <Check size={20} />
                ) : (
                  <Plus size={21} />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          SEASONS + EPISODES
      ================================================= */}

      <section className="tv-episodes-section">
        <div className="tv-section-heading">
          <div>
            <span className="tv-section-label">WATCH</span>

            <h2>Episodes</h2>
          </div>

          <span className="tv-episode-count">
            {episodes.length} {episodes.length === 1 ? "Episode" : "Episodes"}
          </span>
        </div>

        {/* Seasons */}

        <div className="tv-seasons">
          {tvShowData.SeriesData?.map((season) => {
            const isActive = selectedSeason?.seasonId === season.seasonId;

            return (
              <button
                key={season.seasonId}
                type="button"
                onClick={() => setSelectedSeason(season)}
                className={`tv-season-button ${
                  isActive ? "tv-season-active" : ""
                }`}
              >
                {season.SeasonName}
              </button>
            );
          })}
        </div>

        {/* Episodes */}

        <div className="tv-episodes-list">
          {episodes.length > 0 ? (
            episodes.map((episode, index) => {
              const episodeNumber = index + 1;

              const episodeTitle =
                episode.EpisodeName || `Episode ${episodeNumber}`;

              const episodePoster =
  episode.EpisodePoster?.[0] || tvShowData.Poster?.[0];

              return (
                <article
                  key={episode.episodeId || index}
                  className="tv-episode-card"
                >
                  {/* Thumbnail */}

                  <div className="tv-episode-thumbnail">
                    <img src={episodePoster} alt={episodeTitle} />

                    <div className="tv-episode-overlay">
                      <div className="tv-episode-play">
                        <Play size={18} fill="currentColor" />
                      </div>
                    </div>

                    <span className="tv-episode-number">
                      EP {episodeNumber}
                    </span>
                  </div>

                  {/* Information */}

                  <div className="tv-episode-info">
                    <div className="tv-episode-meta">
                      <span>Episode {episodeNumber}</span>

                      {episode.EpisodeRuntime && (
                        <>
                          <span>•</span>

                          <span>{episode.EpisodeRuntime}</span>
                        </>
                      )}
                    </div>

                    <h3>{episodeTitle}</h3>

                    <p>
                      {episode.EpisodePlot ||
                        "No episode description available."}
                    </p>
                  </div>

                  {/* Action */}

                  <div className="tv-episode-action">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/show/watch/${tvShowData._id}/${episode.episodeId}`,
                        )
                      }
                    >
                      <Play size={14} fill="currentColor" />

                      <span>Watch</span>
                    </button>

                    <ChevronRight size={19} className="tv-episode-arrow" />
                  </div>
                </article>
              );
            })
          ) : (
            <div className="tv-no-episodes">
              <div className="tv-no-episodes-icon">
                <Play size={20} />
              </div>

              <h3>No Episodes Available</h3>

              <p>There are no episodes available for this season.</p>
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          SHOW DETAILS
      ================================================= */}

      <section className="tv-details-bottom">
        <div className="tv-details-bottom-header">
          <span>INFORMATION</span>

          <h2>Series Details</h2>
        </div>

        <div className="tv-details-grid">
          <div className="tv-detail-box">
            <span>Director</span>
            <p>{tvShowData.Director || "N/A"}</p>
          </div>

          <div className="tv-detail-box">
            <span>Writer</span>
            <p>{tvShowData.Writer || "N/A"}</p>
          </div>

          <div className="tv-detail-box">
            <span>Studio</span>
            <p>{tvShowData.Studio || "N/A"}</p>
          </div>

          <div className="tv-detail-box">
            <span>Country</span>
            <p>{tvShowData.Country || "N/A"}</p>
          </div>

          <div className="tv-detail-box">
            <span>Box Office</span>
            <p>{tvShowData.BoxOffice || "N/A"}</p>
          </div>

          <div className="tv-detail-box">
            <span>Released</span>
            <p>{tvShowData.Released || "N/A"}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TvShowDetails;
