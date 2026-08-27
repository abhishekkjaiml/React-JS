import { useLocation } from "react-router-dom";

import AllMoviesPage from "./Movies/AllMoviesPage";
import PopularMoviesPage from "./Movies/PopularMoviesPage";
import TopRatedMoviesPage from "./Movies/TopRatedMoviesPage";
import NowPlayingMoviesPage from "./Movies/NowPlayingMoviesPage";
import UpcomingMoviesPage from "./Movies/UpcomingMoviesPage";
import StudiosPage from "./Movies/StudiosPage";

import MoviesPageNavbar from "../components/MoviesPageNavbar";

const MoviesPage = () => {
  const location = useLocation();

  const randerMoviesPage = () => {
    switch (location.pathname) {
      case "/movies":
      case "/movies/all_movies":
        return <AllMoviesPage />;

      case "/movies/popular":
        return <PopularMoviesPage />;

      case "/movies/top_rated":
        return <TopRatedMoviesPage />;

      case "/movies/now_playing":
        return <NowPlayingMoviesPage />;

      case "/movies/upcoming":
        return <UpcomingMoviesPage />;

      case "/movies/studios":
        return <StudiosPage />;

      default:
        return <AllMoviesPage />;
    }
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="movies-navbar-title">
        <h1>Movies</h1>
      </div>
      {/* Movies Navbar */}
      <section className="w-full">
        <MoviesPageNavbar />
      </section>

      {/* Current Route Page */}
      <section
        className='flex flex-wrap gap-1'
      >
        {randerMoviesPage()}
      </section>

    </div>
  );
};

export default MoviesPage;