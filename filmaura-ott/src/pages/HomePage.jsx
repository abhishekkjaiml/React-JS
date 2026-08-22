import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


import HomeMovieCarosalCard from "../components/HomeMovieCarosalCard";
import TrandingMovieCart from "../components/TrandingMovieCart";
import { useMovies } from "../context/movie-context";


const HomePage = () => {
  
  const navigate = useNavigate();
  
  const { homeCarosalMovies, homeTrandingMovies } = useMovies();

  /* =====================================================
     HERO CAROUSEL
  ===================================================== */

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* =====================================================
     TRENDING CAROUSEL REF
  ===================================================== */

  const trendingCarouselRef = useRef(null);

  /* =====================================================
     HERO - NEXT SLIDE
  ===================================================== */

  const nextSlide = () => {
    if (!homeCarosalMovies?.length) return;

    setCurrentIndex((previousIndex) => {
      return (previousIndex + 1) % homeCarosalMovies.length;
    });
  };

  /* =====================================================
     HERO - PREVIOUS SLIDE
  ===================================================== */

  const previousSlide = () => {
    if (!homeCarosalMovies?.length) return;

    setCurrentIndex((previousIndex) => {
      return (
        (previousIndex - 1 + homeCarosalMovies.length) %
        homeCarosalMovies.length
      );
    });
  };

  /* =====================================================
     HERO - GO TO SLIDE
  ===================================================== */

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  /* =====================================================
     HERO - AUTO SLIDE
  ===================================================== */

  useEffect(() => {
    if (!homeCarosalMovies || homeCarosalMovies.length <= 1 || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [homeCarosalMovies, isPaused]);

  /* =====================================================
     TRENDING - NEXT
  ===================================================== */

  const trendingNext = () => {
    const carousel = trendingCarouselRef.current;

    if (!carousel) return;

    const card = carousel.querySelector(".trending-movie-card");

    if (!card) return;

    const cardWidth = card.offsetWidth;

    const styles = window.getComputedStyle(carousel);

    const gap = parseInt(styles.columnGap) || parseInt(styles.gap) || 20;

    carousel.scrollBy({
      left: cardWidth + gap,
      behavior: "smooth",
    });
  };

  /* =====================================================
     TRENDING - PREVIOUS
  ===================================================== */

  const trendingPrevious = () => {
    const carousel = trendingCarouselRef.current;

    if (!carousel) return;

    const card = carousel.querySelector(".trending-movie-card");

    if (!card) return;

    const cardWidth = card.offsetWidth;

    const styles = window.getComputedStyle(carousel);

    const gap = parseInt(styles.columnGap) || parseInt(styles.gap) || 20;

    carousel.scrollBy({
      left: -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  /* =====================================================
     NO HERO DATA
  ===================================================== */

  if (!homeCarosalMovies?.length) {
    return (
      <section className="home-carousel-wrapper">
        <div className="home-carousel-loading">Loading movies...</div>
      </section>
    );
  }

  return (
    <main className="w-full">
      {/* =================================================
          HERO CAROUSEL
      ================================================= */}

      <section
        className="home-carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="home-carousel-slider">
          {/* =================================================
              CAROUSEL TRACK
          ================================================= */}

          <div
            className="home-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {homeCarosalMovies.map((carosalItems) => (
              <div className="home-carousel-slide" key={carosalItems._id}>
                <HomeMovieCarosalCard carosalItems={carosalItems} />
              </div>
            ))}
          </div>

          {/* =================================================
              PREVIOUS BUTTON
          ================================================= */}

          {homeCarosalMovies.length > 1 && (
            <button
              type="button"
              className="home-carousel-prev"
              onClick={previousSlide}
              aria-label="Previous movie"
            >
              <ChevronLeft size={21} />
            </button>
          )}

          {/* =================================================
              NEXT BUTTON
          ================================================= */}

          {homeCarosalMovies.length > 1 && (
            <button
              type="button"
              className="home-carousel-next"
              onClick={nextSlide}
              aria-label="Next movie"
            >
              <ChevronRight size={21} />
            </button>
          )}

          {/* =================================================
              DOTS
          ================================================= */}

          {homeCarosalMovies.length > 1 && (
            <div className="home-carousel-dots">
              {homeCarosalMovies.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={
                    index === currentIndex
                      ? "home-carousel-dot active"
                      : "home-carousel-dot"
                  }
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          TRENDING NOW
      ================================================= */}

      <section className="home-section">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="section-header">
          <div>
            <h2 className="section-title">Trending Now</h2>

            <p className="section-subtitle">Most watched movies right now</p>
          </div>

          {/* =================================================
              TRENDING CONTROLS
          ================================================= */}

          <div className="section-controls">
            {/* View All */}

            <button type="button" className="view-all-btn" onClick={() => navigate('/tranding')}>
              View All
            </button>

            {/* Previous */}

            <button
              type="button"
              className="carousel-btn"
              onClick={trendingPrevious}
              aria-label="Previous trending movies"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Next */}

            <button
              type="button"
              className="carousel-btn"
              onClick={trendingNext}
              aria-label="Next trending movies"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* =================================================
            TRENDING MOVIE CAROUSEL
        ================================================= */}

        <div ref={trendingCarouselRef} className="movie-carousel">
          {homeTrandingMovies?.length > 0 &&
            homeTrandingMovies.map((trandingMovies) => (
              <TrandingMovieCart
                key={trandingMovies._id}
                trandingMovies={trandingMovies}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
