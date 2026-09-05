/* AllRatedMoviesCard.jsx Page Start */

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useMovies } from "../context/movie-context";
import MoviesPageCards from "./MoviesPageCards";

const AllRatedMoviesCard = () => {
  const navigate = useNavigate();

  const { getallMovies } = useMovies();

  // =====================================================
  // Slider References
  // =====================================================

  const ratedSliderRef = useRef(null);
  const pgSliderRef = useRef(null);

  // =====================================================
  // R-Rated Movies
  // =====================================================

  const MoviesRated_R =
    getallMovies?.filter((movie) => movie.Rated === "R") || [];

  // =====================================================
  // PG + PG-13 Rated Movies
  // =====================================================

  const MoviesRated_PG =
    getallMovies?.filter(
      (movie) => movie.Rated === "PG" || movie.Rated === "PG-13",
    ) || [];

  // =====================================================
  // Slider Scroll
  // =====================================================

  const handleSliderScroll = (sliderRef, direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const firstCard = slider.querySelector(".rated-movie-card-item");

    const cardWidth = firstCard?.offsetWidth || 240;

    const gap =
      window.innerWidth <= 480 ? 12 : window.innerWidth <= 768 ? 15 : 18;

    const scrollAmount = cardWidth + gap;

    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // =====================================================
  // Mouse Drag Start
  // =====================================================

  const handleMouseDown = (event, sliderRef) => {
    const slider = sliderRef.current;

    if (!slider) return;

    /*
      Do not start dragging when clicking
      buttons, links or other interactive elements.
    */

    const interactiveElement = event.target.closest(
      "button, a, input, textarea, select",
    );

    if (interactiveElement) {
      slider.isMouseDown = false;
      slider.isDragging = false;

      return;
    }

    slider.isMouseDown = true;
    slider.isDragging = false;

    slider.startX = event.pageX - slider.offsetLeft;

    slider.startScrollLeft = slider.scrollLeft;

    slider.classList.add("rated-movies-slider-dragging");
  };

  // =====================================================
  // Mouse Drag Move
  // =====================================================

  const handleMouseMove = (event, sliderRef) => {
    const slider = sliderRef.current;

    if (!slider?.isMouseDown) return;

    const currentX = event.pageX - slider.offsetLeft;

    const distance = currentX - slider.startX;

    /*
      Small movement should remain a normal click.
      Drag starts only after 5px movement.
    */

    if (Math.abs(distance) < 5) {
      return;
    }

    slider.isDragging = true;

    event.preventDefault();

    const walk = distance * 1.4;

    slider.scrollLeft = slider.startScrollLeft - walk;
  };

  // =====================================================
  // Mouse Drag End
  // =====================================================

  const handleMouseUp = (sliderRef) => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.isMouseDown = false;

    slider.classList.remove("rated-movies-slider-dragging");

    /*
      Keep dragging state for one event cycle
      so the click generated after dragging
      can be prevented.
    */

    if (slider.isDragging) {
      setTimeout(() => {
        slider.isDragging = false;
      }, 0);
    }
  };

  // =====================================================
  // Prevent Click After Drag
  // =====================================================

  const handleSliderClick = (event, sliderRef) => {
    const slider = sliderRef.current;

    if (!slider) return;

    if (slider.isDragging) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  // =====================================================
  // R-Rated View All
  // =====================================================

  const handleRatedViewAll = () => {
    navigate("/movies/r_rated");
  };

  // =====================================================
  // PG-Rated View All
  // =====================================================

  const handlePGViewAll = () => {
    navigate("/movies/pg_rated");
  };

  return (
    <section className="rated-movies-section">
      {/* =====================================================
         R-Rated Movies
      ===================================================== */}

      <div className="rated-movies-category">
        {/* =====================================================
           R-Rated Header
        ===================================================== */}

        <div className="rated-movies-header">
          <div className="rated-movies-heading">
            <span className="rated-movies-label">Mature Collection</span>

            <h2 className="rated-movies-title">R-Rated Movies</h2>

            <p className="rated-movies-description">
              Explore our complete collection of R-rated movies.
            </p>
          </div>

          {/* =====================================================
             R-Rated Actions
          ===================================================== */}

          <div className="rated-movies-actions">
            <button
              type="button"
              className="rated-movies-view-all"
              onClick={handleRatedViewAll}
            >
              View All
            </button>

            <div className="rated-movies-arrows">
              <button
                type="button"
                className="rated-movies-arrow"
                onClick={() => handleSliderScroll(ratedSliderRef, "left")}
                aria-label="Previous R-rated movies"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                className="rated-movies-arrow"
                onClick={() => handleSliderScroll(ratedSliderRef, "right")}
                aria-label="Next R-rated movies"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
           R-Rated Slider
        ===================================================== */}

        {MoviesRated_R.length > 0 ? (
          <div
            ref={ratedSliderRef}
            className="rated-movies-slider"
            onMouseDown={(event) => handleMouseDown(event, ratedSliderRef)}
            onMouseMove={(event) => handleMouseMove(event, ratedSliderRef)}
            onMouseUp={() => handleMouseUp(ratedSliderRef)}
            onMouseLeave={() => handleMouseUp(ratedSliderRef)}
            onClick={(event) => handleSliderClick(event, ratedSliderRef)}
          >
            <div className="rated-movies-slider-track">
              {MoviesRated_R.map((moviesPageItem) => (
                <div key={moviesPageItem._id} className="rated-movie-card-item">
                  <MoviesPageCards moviesPageItem={moviesPageItem} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="rated-movies-empty">No R-Rated Movies Found</div>
        )}
      </div>

      {/* =====================================================
         PG + PG-13 Movies
      ===================================================== */}

      <div
        className="
          rated-movies-category
          rated-movies-pg-category
        "
      >
        {/* =====================================================
           PG Header
        ===================================================== */}

        <div className="rated-movies-header">
          <div className="rated-movies-heading">
            <span className="rated-movies-label">Family Collection</span>

            <h2 className="rated-movies-title">PG-Rated Movies</h2>

            <p className="rated-movies-description">
              Explore our complete collection of PG and PG-13 movies.
            </p>
          </div>

          {/* =====================================================
             PG Actions
          ===================================================== */}

          <div className="rated-movies-actions">
            <button
              type="button"
              className="rated-movies-view-all"
              onClick={handlePGViewAll}
            >
              View All
            </button>

            <div className="rated-movies-arrows">
              <button
                type="button"
                className="rated-movies-arrow"
                onClick={() => handleSliderScroll(pgSliderRef, "left")}
                aria-label="Previous PG-rated movies"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                className="rated-movies-arrow"
                onClick={() => handleSliderScroll(pgSliderRef, "right")}
                aria-label="Next PG-rated movies"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
           PG Slider
        ===================================================== */}

        {MoviesRated_PG.length > 0 ? (
          <div
            ref={pgSliderRef}
            className="rated-movies-slider"
            onMouseDown={(event) => handleMouseDown(event, pgSliderRef)}
            onMouseMove={(event) => handleMouseMove(event, pgSliderRef)}
            onMouseUp={() => handleMouseUp(pgSliderRef)}
            onMouseLeave={() => handleMouseUp(pgSliderRef)}
            onClick={(event) => handleSliderClick(event, pgSliderRef)}
          >
            <div className="rated-movies-slider-track">
              {MoviesRated_PG.map((moviesPageItem) => (
                <div key={moviesPageItem._id} className="rated-movie-card-item">
                  <MoviesPageCards moviesPageItem={moviesPageItem} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="rated-movies-empty">No PG-Rated Movies Found</div>
        )}
      </div>
    </section>
  );
};

export default AllRatedMoviesCard;

/* AllRatedMoviesCard.jsx Page End */
