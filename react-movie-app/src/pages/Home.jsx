import React from "react";
import MoviesCard from "../components/MoviesCard";
import { useMovies } from "../context/movie-context";

const Home = () => {

  const {
    movies,
    query,
    isLoading,
    isError,
  } = useMovies();

  const isSearching = query.trim();

  return (
    <div className="home-container">

  <div className="home-heading">

    <h1 className="home-title">
      {
        isSearching
          ? `Search Results for "${query}"`
          : "Now Showing"
      }
    </h1>

    {
      !isSearching && (
        <button className="home-view-all">
          View All
        </button>
      )
    }

  </div>

  {
    isSearching && isLoading ? (

      <div className="home-message-container">

        <div className="home-loading">

          <div className="home-loading-spinner"></div>

          <p className="home-loading-text">
            Searching movies...
          </p>

        </div>

      </div>

    ) : isError.show ? (

      <div className="home-message-container">

        <p className="home-error">
          {isError.msg}
        </p>

      </div>

    ) : movies?.length > 0 ? (

      <div className="home-movies-grid">

        {
          movies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.imdbID}
              isApiMovie={Boolean(isSearching)}
            />
          ))
        }

      </div>

    ) : (

      <div className="home-message-container">

        <p className="home-no-movies">
          No Movies
        </p>

      </div>

    )
  }

</div>
  );
};

export default Home;