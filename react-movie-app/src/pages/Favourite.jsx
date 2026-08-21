import FavouriteCart from "../components/FavouriteCart";
import { useFavouriteMovieCart } from "../context/movie-favourite-context";

const Favourite = () => {
  const { favourite } = useFavouriteMovieCart();

  return (
    <div className="favourite-page">
      {/* Heading */}

      <div className="favourite-page-header">
        <div>
          <h1 className="favourite-page-title">My Favourite Movies</h1>

          <p className="favourite-page-description">
            Your favourite movies are saved here for quick access.
          </p>
        </div>

        {favourite?.length > 0 && (
          <div className="favourite-count">{favourite.length} Movies</div>
        )}
      </div>

      {/* Favourite Movies */}

      {favourite?.length > 0 ? (
        <div className="favourite-movies-list">
          {favourite.map((favMovie) => (
            <FavouriteCart favMovie={favMovie} key={favMovie.imdbID} />
          ))}
        </div>
      ) : (
        /* Empty State */

        <div className="favourite-empty">
          <div className="favourite-empty-icon">❤️</div>

          <h2 className="favourite-empty-title">No Favourite Movies</h2>

          <p className="favourite-empty-description">
            Movies you add to your favourites will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourite;
