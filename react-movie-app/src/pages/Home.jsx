import React, { useEffect, useState } from "react";
import MoviesCard from "../components/MoviesCard";
import { useMovies } from "../context/movie-context";

const Home = () => {
  const { movies, query, isLoading, isError } = useMovies();

  const isSearching = query.trim();

  /* =========================
     PAGINATION
  ========================= */

  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 12;

  /* Search change hone par
     page 1 se start hoga */

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  /* Total Pages */

  const totalPages = Math.ceil((movies?.length || 0) / moviesPerPage);

  /* Current Page Movies */

  const startIndex = (currentPage - 1) * moviesPerPage;

  const endIndex = startIndex + moviesPerPage;

  const currentMovies = movies?.slice(startIndex, endIndex);

  /* Previous Page */

  const onPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /* Next Page */

  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="home-container">
      {/* Heading */}

      <div className="home-heading">
        <h1 className="home-title">
          {isSearching ? `Search Results for "${query}"` : "Now Showing"}
        </h1>

        {!isSearching && <button className="home-view-all">View All</button>}
      </div>

      {/* Loading */}

      {isSearching && isLoading ? (
        <div className="home-message-container">
          <div className="home-loading">
            <div className="home-loading-spinner"></div>

            <p className="home-loading-text">Searching movies...</p>
          </div>
        </div>
      ) : isError.show ? (
        /* Error */

        <div className="home-message-container">
          <p className="home-error">{isError.msg}</p>
        </div>
      ) : movies?.length > 0 ? (
        /* Movies */

        <>
          <div className="home-movies-grid">
            {currentMovies.map((movie) => (
              <MoviesCard
                movie={movie}
                key={movie.imdbID}
                isApiMovie={Boolean(isSearching)}
              />
            ))}
          </div>

          {/* Pagination */}

          {totalPages > 1 && (
            <div className="home-pagination">
              {/* Previous */}

              <button
                onClick={onPreviousPage}
                disabled={currentPage === 1}
                className="home-pagination-button"
              >
                Previous
              </button>

              {/* Page Numbers */}

              <div className="home-pagination-pages">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "home-pagination-page home-pagination-page-active"
                        : "home-pagination-page"
                    }
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next */}

              <button
                onClick={onNextPage}
                disabled={currentPage === totalPages}
                className="home-pagination-button"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        /* No Movies */

        <div className="home-message-container">
          <p className="home-no-movies">No Movies</p>
        </div>
      )}
    </div>
  );
};

export default Home;
