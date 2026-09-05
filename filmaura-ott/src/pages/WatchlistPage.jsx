import { useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import WatchlistMoviesPageCard from "../components/WatchlistMoviesPageCard";
import WatchlistTvSeriesPageCard from "../components/WatchlistTvSeriesPageCard";

import { useMovieWatchlist } from "../context/movie-watchlist-context";
import { useTvSeriesWatchlist } from "../context/tvSeries-Watchlist-context";
import { useNavigate } from "react-router-dom";

const WatchlistPage = () => {

  const navigate = useNavigate()
  const moviesSliderRef = useRef(null);
  const tvSeriesSliderRef = useRef(null);

  /* =====================================================
     WATCHLIST CONTEXT
  ===================================================== */

  const { movieWatchlist } = useMovieWatchlist();

  const { tvShowWatchlist } = useTvSeriesWatchlist();

  /* =====================================================
     EMPTY WATCHLIST
  ===================================================== */

  const isWatchlistEmpty =
    (!movieWatchlist || movieWatchlist.length === 0) &&
    (!tvShowWatchlist || tvShowWatchlist.length === 0);

  /* =====================================================
     SLIDER SCROLL
  ===================================================== */

  const handleSliderScroll = (sliderRef, direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const scrollAmount = slider.clientWidth * 0.8;

    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,

      behavior: "smooth",
    });
  };

  /* =====================================================
     MOUSE DRAG START
  ===================================================== */

  const handleMouseDown = (event, sliderRef) => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.isDragging = true;

    slider.startX = event.pageX - slider.offsetLeft;

    slider.startScrollLeft = slider.scrollLeft;

    slider.classList.add("watchlist-slider-dragging");
  };

  /* =====================================================
     MOUSE DRAG MOVE
  ===================================================== */

  const handleMouseMove = (event, sliderRef) => {
    const slider = sliderRef.current;

    if (!slider?.isDragging) return;

    event.preventDefault();

    const currentX = event.pageX - slider.offsetLeft;

    const walk = (currentX - slider.startX) * 1.4;

    slider.scrollLeft = slider.startScrollLeft - walk;
  };

  /* =====================================================
     MOUSE DRAG END
  ===================================================== */

  const handleMouseUp = (sliderRef) => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.isDragging = false;

    slider.classList.remove("watchlist-slider-dragging");
  };

  return (
    <main className="watchlist-page">
      {/* =================================================
          MOVIES SECTION
      ================================================= */}

      {movieWatchlist?.length > 0 && (
        <section className="watchlist-section">
          {/* =================================================
              MOVIES HEADER
          ================================================= */}

          <div className="watchlist-section-header">
            <h2 className="watchlist-section-title">Movies</h2>

            <div className="watchlist-section-actions">
              <button type="button" className="watchlist-view-all" onClick={() => navigate('/watchlist/movies')}>
                View All
              </button>

              <button
                type="button"
                className="watchlist-arrow"
                onClick={() => handleSliderScroll(moviesSliderRef, "left")}
                aria-label="Previous movies"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                className="watchlist-arrow"
                onClick={() => handleSliderScroll(moviesSliderRef, "right")}
                aria-label="Next movies"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* =================================================
              MOVIES SLIDER
          ================================================= */}

          <div
            ref={moviesSliderRef}
            className="watchlist-slider"
            onMouseDown={(event) => handleMouseDown(event, moviesSliderRef)}
            onMouseMove={(event) => handleMouseMove(event, moviesSliderRef)}
            onMouseUp={() => handleMouseUp(moviesSliderRef)}
            onMouseLeave={() => handleMouseUp(moviesSliderRef)}
          >
            <WatchlistMoviesPageCard />
          </div>
        </section>
      )}

      {/* =================================================
          TV SHOWS SECTION
      ================================================= */}

      {tvShowWatchlist?.length > 0 && (
        <section className="watchlist-section">
          {/* =================================================
              TV SHOWS HEADER
          ================================================= */}

          <div className="watchlist-section-header">
            <h2 className="watchlist-section-title">TV Shows</h2>

            <div className="watchlist-section-actions">
              <button type="button" className="watchlist-view-all"  onClick={() => navigate('/watchlist/shows')}>
                View All
              </button>

              <button
                type="button"
                className="watchlist-arrow"
                onClick={() => handleSliderScroll(tvSeriesSliderRef, "left")}
                aria-label="Previous TV shows"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                className="watchlist-arrow"
                onClick={() => handleSliderScroll(tvSeriesSliderRef, "right")}
                aria-label="Next TV shows"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* =================================================
              TV SHOWS SLIDER
          ================================================= */}

          <div
            ref={tvSeriesSliderRef}
            className="watchlist-slider"
            onMouseDown={(event) => handleMouseDown(event, tvSeriesSliderRef)}
            onMouseMove={(event) => handleMouseMove(event, tvSeriesSliderRef)}
            onMouseUp={() => handleMouseUp(tvSeriesSliderRef)}
            onMouseLeave={() => handleMouseUp(tvSeriesSliderRef)}
          >
            <WatchlistTvSeriesPageCard />
          </div>
        </section>
      )}

      {/* =================================================
          EMPTY WATCHLIST
      ================================================= */}

      {isWatchlistEmpty && (
        <section className="watchlist-empty">
          <h2>Watchlist is empty</h2>

          <p>Add movies and TV shows to your watchlist to see them here.</p>
        </section>
      )}
    </main>
  );
};

export default WatchlistPage;
