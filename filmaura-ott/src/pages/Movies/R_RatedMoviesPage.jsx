/* R_RatedMoviesPage.jsx Page Start */

import React from "react";

import { useMovies } from "../../context/movie-context";
import MoviesPageCards from "../../components/MoviesPageCards";

const R_RatedMoviesPage = () => {
  const { getallMovies } = useMovies();

  const MoviesRated_R =
    getallMovies?.filter(
      (movie) => movie.Rated === "R"
    ) || [];

  return (
    <main className="rated-page">

      {/* =====================================================
         Rated Movies Header
      ===================================================== */}

      <div className="rated-page-header">

        <span className="rated-page-label">
          Mature Collection
        </span>

        <h1 className="rated-page-title">
          R-Rated Movies
        </h1>

        <p className="rated-page-description">
          Explore our complete collection of R-rated movies.
        </p>

      </div>


      {/* =====================================================
         Rated Movies List
      ===================================================== */}

      {MoviesRated_R.length > 0 ? (

        <section className="rated-page-list">

          {MoviesRated_R.map(
            (moviesPageItem) => (
              <div
                key={moviesPageItem._id}
                className="rated-page-card-item"
              >
                <MoviesPageCards
                  moviesPageItem={moviesPageItem}
                />
              </div>
            )
          )}

        </section>

      ) : (

        <div className="rated-page-empty">
          No R-Rated Movies Found
        </div>

      )}

    </main>
  );
};

export default R_RatedMoviesPage;

/* R_RatedMoviesPage.jsx Page End */