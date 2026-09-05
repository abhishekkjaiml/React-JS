import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import TrandingMoviePage from "./pages/TrandingMoviePage";
import MoviesPage from "./pages/MoviesPage";
import AllMoviesPage from "./pages/Movies/AllMoviesPage";
import NowPlayingMoviesPage from "./pages/Movies/NowPlayingMoviesPage";
import PopularMoviesPage from "./pages/Movies/PopularMoviesPage";
import TopRatedMoviesPage from "./pages/Movies/TopRatedMoviesPage";
import UpcomingMoviesPage from "./pages/Movies/UpcomingMoviesPage";
import StudiosPage from "./pages/Movies/StudiosPage";
import MovieDetails from "./pages/MovieDetails";
import TvShowPage from "./pages/TvShowPage";
import AllTvShowsPage from "./pages/TvShows/AllTvShowsPage";
import PopularTvShowsPage from "./pages/TvShows/PopularTvShowsPage";
import TopRatedTvShowsPage from "./pages/TvShows/TopRatedTvShowsPage";
import NowPlayingTvShowsPage from "./pages/TvShows/NowPlayingTvShowsPage";
import UpcomingTvShowsPage from "./pages/TvShows/UpcomingTvShowsPage";
import StudiosTvShowsPage from "./pages/TvShows/StudiosTvShowsPage";
import StreamMovies from "./pages/StreamMovies";
import StreamTvShow from "./pages/StreamTvShow";
import TvShowDetails from "./pages/TvShowDetails";
import WatchlistPage from "./pages/WatchlistPage";
import R_RatedMoviesPage from "./pages/Movies/R_RatedMoviesPage";
import PG_RatedMoviesPage from "./pages/Movies/PG_RatedMoviesPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import HelpSupportPage from "./pages/HelpSupportPage";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`app-layout ${
        sidebarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* =====================================================
          MAIN APPLICATION
      ===================================================== */}

      <div className="app-content">
        {/* ==================== NAVBAR ==================== */}

        <Navbar />

        {/* ==================== PAGE ==================== */}

        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tranding" element={<TrandingMoviePage />} />
            <Route path="/movies" element={<MoviesPage />}>
              <Route path="all_movies" element={<AllMoviesPage />} />
              <Route path="popular" element={<PopularMoviesPage />} />
              <Route path="top_rated" element={<TopRatedMoviesPage />} />
              <Route path="now_playing" element={<NowPlayingMoviesPage />} />
              <Route path="upcoming" element={<UpcomingMoviesPage />} />
              <Route path="studios" element={<StudiosPage />} />
            </Route>
            <Route path="movies/r_rated" element={<R_RatedMoviesPage />} />
            <Route path="movies/pg_rated" element={<PG_RatedMoviesPage />} />

            <Route path="/shows" element={<TvShowPage />}>
              <Route path="all_shows" element={<AllTvShowsPage />} />
              <Route path="popular_shows" element={<PopularTvShowsPage />} />
              <Route path="top_rated" element={<TopRatedTvShowsPage />} />
              <Route path="now_playing" element={<NowPlayingTvShowsPage />} />
              <Route path="upcoming" element={<UpcomingTvShowsPage />} />
              <Route path="studios" element={<StudiosTvShowsPage />} />
            </Route>

            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movie/watch/:id" element={<StreamMovies />} />
            <Route path="show/:id" element={<TvShowDetails />} />
            <Route path="show/watch/:id" element={<TvShowDetails />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/help" element={<HelpSupportPage />} />
            <Route path="/plans" element={<SubscriptionPage />} />
          </Routes>
        </main>

        {/* ==================== FOOTER ==================== */}

        <Footer />
      </div>
    </div>
  );
};

export default App;
