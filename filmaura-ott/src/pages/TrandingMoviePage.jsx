import { Search, SlidersHorizontal } from "lucide-react";
import TrandingMovieCart from "../components/TrandingMovieCart";
import { useMovies } from "../context/movie-context";

const TrandingMoviePage = () => {
  const { homeTrandingMovies } = useMovies();

  return (
    <main className="trending-page">

      {/* ==========================================
          PAGE HEADER
      ========================================== */}

      <section className="trending-page-header">

        {/* Heading */}

        <div className="trending-page-heading">

          <span className="trending-page-badge">
            ✦ TRENDING
          </span>

          <h1>
            Trending Movies
          </h1>

          <p>
            Discover the most popular movies everyone
            is watching right now.
          </p>

        </div>

        {/* Search + Filter */}

        <div className="trending-page-actions">

          <div className="trending-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search movies..."
            />

          </div>

          <button
            type="button"
            className="trending-filter-btn"
          >
            <SlidersHorizontal size={18} />

            Filter
          </button>

        </div>

      </section>

      {/* ==========================================
          RESULTS HEADER
      ========================================== */}

      <section className="trending-results-header">

        <div>
          <h2>
            Popular Right Now
          </h2>

          <p>
            {homeTrandingMovies?.length || 0} movies available
          </p>
        </div>

        <button
          type="button"
          className="trending-sort-btn"
        >
          Trending
        </button>

      </section>

      {/* ==========================================
          MOVIE GRID
      ========================================== */}

      <section className="trending-movie-grid">

        {homeTrandingMovies?.length > 0 ? (

          homeTrandingMovies.map((trandingMovies) => (

            <TrandingMovieCart
              key={trandingMovies._id}
              trandingMovies={trandingMovies}
            />

          ))

        ) : (

          <div className="trending-empty">

            <h3>
              No movies found
            </h3>

            <p>
              Try again later.
            </p>

          </div>

        )}

      </section>

    </main>
  );
};

export default TrandingMoviePage;