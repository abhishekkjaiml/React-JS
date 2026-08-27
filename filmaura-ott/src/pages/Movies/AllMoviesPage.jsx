import { useEffect } from "react";
import MoviesPageCards from "../../components/MoviesPageCards";
import { useMovies } from "../../context/movie-context";
import { useLocation } from "react-router-dom";

const AllMoviesPage = () => {
  const { getallMovies } = useMovies();

  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [pathname]);

  return (
    <section className="flex flex-wrap gap-5 mt-5">
      {getallMovies?.length > 0 ? (
        getallMovies.map((moviesPageItem) => (
          <div
            key={moviesPageItem._id}
            className="w-[calc(25%-15px)]"
          >
            <MoviesPageCards
              moviesPageItem={moviesPageItem}
            />
          </div>
        ))
      ) : (
        <div>No Movies</div>
      )}
    </section>
  );
};

export default AllMoviesPage;