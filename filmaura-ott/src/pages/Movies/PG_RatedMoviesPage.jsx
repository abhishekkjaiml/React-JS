/* R_RatedMoviesPage.jsx Page Start */

import React from "react";

import { useMovies } from "../../context/movie-context";
import MoviesPageCards from "../../components/MoviesPageCards";

const PG_RatedMoviesPage = () => {
  const { getallMovies } = useMovies();

  const MoviesRated_PG =
    getallMovies?.filter(
      (movie) => movie.Rated === "PG" || movie.Rated === "PG-13"
    ) || [];

  return (
    <main className="rated-page">

      {/* =====================================================
         Rated Movies Header
      ===================================================== */}

      <div className="rated-page-header">

        <span className="rated-page-label">
          Family Collection
        </span>

        <h1 className="rated-page-title">
          PG-Rated Movies
        </h1>

        <p className="rated-page-description">
          Explore our complete collection of PG-rated movies.
        </p>

      </div>


      {/* =====================================================
         Rated Movies List
      ===================================================== */}

      {MoviesRated_PG.length > 0 ? (

        <section className="rated-page-list">

          {MoviesRated_PG.map(
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

export default PG_RatedMoviesPage;

/* PG_RatedMoviesPage.jsx Page End */