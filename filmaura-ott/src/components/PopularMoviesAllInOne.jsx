/* PopularMoviesAllInOne.jsx Page Start */

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useMovies } from "../context/movie-context";
import MoviesPageCards from "./MoviesPageCards";

const PopularMoviesAllInOne = () => {
  const navigate = useNavigate();
  const { getallMovies } = useMovies();

  // =====================================================
  // Slider References
  // =====================================================

  const wizardingSliderRef = useRef(null);
  const johnWickSliderRef = useRef(null);
  const spiderManSliderRef = useRef(null);
  const fantasticFourSliderRef = useRef(null);
  const netflixSliderRef = useRef(null);
  const transformersSliderRef = useRef(null);
  const menInBlackSliderRef = useRef(null);

  // =====================================================
  // Movie Collections
  // =====================================================

  const WizardingWorlds =
    getallMovies?.filter((movie) => movie.Universe === "Wizarding World") || [];

  const JohnWickUniverse =
    getallMovies?.filter((movie) => movie.Universe === "John Wick") || [];

  const SpiderManUniverse =
    getallMovies?.filter((movie) =>
      movie.Title?.toLowerCase().includes("spider-man"),
    ) || [];

  const FantasticFourAll =
    getallMovies?.filter((movie) =>
      movie.Title?.toLowerCase().includes("fantastic four"),
    ) || [];

  const NextflixMovies =
    getallMovies?.filter((movie) =>
      movie.StreamingPlatform?.includes("Netflix Originals"),
    ) || [];

  const TransformersAllMovies =
    getallMovies?.filter((movie) => movie.Universe === "Transformers") || [];

  const MenInBlackMovie =
    getallMovies?.filter((movie) => movie.Universe === "Men in Black") || [];

  // =====================================================
  // Slider Scroll
  // =====================================================

  const handleSliderScroll = (sliderRef, direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const firstCard = slider.querySelector(".popular-movie-card-item");

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

    slider.isDragging = true;

    slider.startX = event.pageX - slider.offsetLeft;

    slider.startScrollLeft = slider.scrollLeft;

    slider.classList.add("popular-movies-slider-dragging");
  };

  // =====================================================
  // Mouse Drag Move
  // =====================================================

  const handleMouseMove = (event, sliderRef) => {
    const slider = sliderRef.current;

    if (!slider?.isDragging) return;

    event.preventDefault();

    const currentX = event.pageX - slider.offsetLeft;

    const walk = (currentX - slider.startX) * 1.4;

    slider.scrollLeft = slider.startScrollLeft - walk;
  };

  // =====================================================
  // Mouse Drag End
  // =====================================================

  const handleMouseUp = (sliderRef) => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.isDragging = false;

    slider.classList.remove("popular-movies-slider-dragging");
  };

  // =====================================================
  // Reusable Movie Section
  // =====================================================

  const renderMovieSection = (
    movies,
    title,
    label,
    description,
    sliderRef,
    viewAllRoute,
  ) => {
    return (
      <section className="popular-movies-category">
        {/* =====================================================
           Section Header
        ===================================================== */}

        <div className="popular-movies-header">
          <div className="popular-movies-heading">
            <span className="popular-movies-label">{label}</span>

            <h2 className="popular-movies-title">{title}</h2>

            <p className="popular-movies-description">{description}</p>
          </div>

          {/* =====================================================
             View All + Slider Arrows
          ===================================================== */}

          <div className="popular-movies-actions">
            <button
              type="button"
              className="popular-movies-view-all"
              onClick={() => navigate(viewAllRoute)}
            >
              View All
            </button>

            <div className="popular-movies-arrows">
              <button
                type="button"
                className="popular-movies-arrow"
                onClick={() => handleSliderScroll(sliderRef, "left")}
                aria-label={`Previous ${title}`}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                className="popular-movies-arrow"
                onClick={() => handleSliderScroll(sliderRef, "right")}
                aria-label={`Next ${title}`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
           Movies Slider
        ===================================================== */}

        {movies.length > 0 ? (
          <div
            ref={sliderRef}
            className="popular-movies-slider"
            onMouseDown={(event) => handleMouseDown(event, sliderRef)}
            onMouseMove={(event) => handleMouseMove(event, sliderRef)}
            onMouseUp={() => handleMouseUp(sliderRef)}
            onMouseLeave={() => handleMouseUp(sliderRef)}
          >
            <div className="popular-movies-slider-track">
              {movies.map((moviesPageItem) => (
                <div
                  key={moviesPageItem._id}
                  className="popular-movie-card-item"
                >
                  <MoviesPageCards moviesPageItem={moviesPageItem} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="popular-movies-empty">No {title} Found</div>
        )}
      </section>
    );
  };

  return (
    <section className="popular-movies-all-in-one">
      {/* =====================================================
         Wizarding World
      ===================================================== */}

      {renderMovieSection(
        WizardingWorlds,
        "Wizarding World",
        "Magical Collection",
        "Explore movies from the magical world of wizards and witches.",
        wizardingSliderRef,
        "/movies/wizarding-world",
      )}

      {/* =====================================================
         John Wick
      ===================================================== */}

      {renderMovieSection(
        JohnWickUniverse,
        "John Wick",
        "Action Collection",
        "Enter the high-octane world of the legendary assassin.",
        johnWickSliderRef,
        "/movies/john-wick",
      )}

      {/* =====================================================
         Spider-Man
      ===================================================== */}

      {renderMovieSection(
        SpiderManUniverse,
        "Spider-Man",
        "Marvel Collection",
        "Swing through the city with your friendly neighborhood Spider-Man.",
        spiderManSliderRef,
        "/movies/spider-man",
      )}

      {/* =====================================================
         Fantastic Four
      ===================================================== */}

      {renderMovieSection(
        FantasticFourAll,
        "Fantastic Four",
        "Superhero Collection",
        "Discover the adventures of Marvel's first family of superheroes.",
        fantasticFourSliderRef,
        "/movies/fantastic-four",
      )}

      {/* =====================================================
         Netflix Originals
      ===================================================== */}

      {renderMovieSection(
        NextflixMovies,
        "Netflix Originals",
        "Netflix Collection",
        "Discover popular movies from Netflix Originals.",
        netflixSliderRef,
        "/movies/netflix-originals",
      )}

      {/* =====================================================
         Transformers
      ===================================================== */}

      {renderMovieSection(
        TransformersAllMovies,
        "Transformers",
        "Robotic Collection",
        "Experience the epic battle between Autobots and Decepticons.",
        transformersSliderRef,
        "/movies/transformers",
      )}

      {/* =====================================================
         Men in Black
      ===================================================== */}

      {renderMovieSection(
        MenInBlackMovie,
        "Men in Black",
        "Sci-Fi Collection",
        "Join the agents protecting Earth from extraterrestrial threats.",
        menInBlackSliderRef,
        "/movies/men-in-black",
      )}
    </section>
  );
};

export default PopularMoviesAllInOne;

/* PopularMoviesAllInOne.jsx Page End */
