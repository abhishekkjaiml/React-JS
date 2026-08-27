import TvShowsPageNavbar from '../components/TvShowsPageNavbar'
import { useLocation } from 'react-router-dom'
import AllTvShowsPage from './TvShows/AllTvShowsPage';
import PopularTvShowsPage from './TvShows/PopularTvShowsPage';
import TopRatedTvShowsPage from './TvShows/TopRatedTvShowsPage';
import NowPlayingTvShowsPage from './TvShows/NowPlayingTvShowsPage';
import UpcomingTvShowsPage from './TvShows/UpcomingTvShowsPage';
import StudiosTvShowsPage from './TvShows/StudiosTvShowsPage';


const TvShowPage = () => {

  const location = useLocation()

  const randerMoviesPage = () => {
    switch (location.pathname) {
      case "/shows":
      case "/shows/all_shows":
        return <AllTvShowsPage />;

      case "/shows/popular_shows":
        return <PopularTvShowsPage />;

      case "/shows/top_rated":
        return <TopRatedTvShowsPage />;

      case "/shows/now_playing":
        return <NowPlayingTvShowsPage />;

      case "/shows/upcoming":
        return <UpcomingTvShowsPage />;

      case "/shows/studios":
        return <StudiosTvShowsPage />;

      default:
        return <AllMoviesPage />;
    }
  };


  return (
    <div>
        {/* Heading */}
      <div className="movies-navbar-title">
        <h1>TV Shows</h1>
      </div>
        <section>
            <TvShowsPageNavbar />
        </section>
        <section>
          {
            randerMoviesPage()
          }
        </section>
    </div>
  )
}

export default TvShowPage