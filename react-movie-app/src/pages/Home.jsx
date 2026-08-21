import React from "react";
import MoviesCard from "../components/MoviesCard";
import { useMovies } from "../context/movie-context";

const Home = () => {

  const { movies } = useMovies();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Now Showing
        </h1>

        <button className="text-sm font-semibold text-red-500 hover:text-red-600">
          View All
        </button>
      </div>

      {/* Movies */}
      {
        movies?.length > 0 ? (

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">

            {
              movies.map((movie) => (
                <MoviesCard
                  movie={movie}
                  key={movie.imdbID}
                />
              ))
            }

          </div>

        ) : (

          <div className="flex justify-center items-center py-20">
            <p className="text-gray-500">
              No Movies
            </p>
          </div>

        )
      }

    </div>
  );
};

export default Home;