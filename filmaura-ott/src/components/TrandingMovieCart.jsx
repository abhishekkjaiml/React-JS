import { Play, Plus, Star } from "lucide-react";
import React from "react";

const TrandingMovieCart = ({ trandingMovies }) => {
  return (
    <div className="trending-movie-card group">
      {/* Poster */}
      <img
        src={trandingMovies.Poster}
        alt={trandingMovies.Title}
        className="trending-movie-poster"
      />

      {/* Default bottom gradient */}
      <div className="trending-card-gradient" />

      {/* Movie title - always visible */}
      <div className="trending-card-title">
        <h3>{trandingMovies.Title}</h3>

        <div className="trending-card-meta">
          <span>{trandingMovies.Year}</span>
          <span>•</span>
          <span>{trandingMovies.Rated}</span>
          <span>•</span>
          <span>{trandingMovies.Runtime}</span>
        </div>
      </div>

      {/* Hover Details */}
      <div className="trending-card-hover">
        {/* Title */}
        <h3 className="trending-hover-title">
          {trandingMovies.Title}
        </h3>

        {/* Rating */}
        <div className="trending-hover-rating">
          <Star size={14} fill="currentColor" />
          <span>{trandingMovies.imdbRating || "N/A"}</span>
          <span className="opacity-50">IMDb</span>
        </div>

        {/* Meta */}
        <div className="trending-hover-meta">
          <span>{trandingMovies.Year}</span>
          <span>•</span>
          <span>{trandingMovies.Rated}</span>
          <span>•</span>
          <span>{trandingMovies.Runtime}</span>
          <span>•</span>
          <span>{trandingMovies.Language}</span>
        </div>

        {/* Genre */}
        <p className="trending-hover-genre">
          {trandingMovies.Genre}
        </p>

        {/* Plot */}
        <p className="trending-hover-plot">
          {trandingMovies.Plot}
        </p>

        {/* Buttons */}
        <div className="trending-hover-actions">
          <button className="trending-watch-btn">
            <Play size={17} fill="currentColor" />
            Watch Now
          </button>

          <button className="trending-list-btn">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrandingMovieCart;