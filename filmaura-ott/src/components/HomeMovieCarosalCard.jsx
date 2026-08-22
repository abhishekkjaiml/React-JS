import { Play, Plus, Star, Clock3, CalendarDays } from "lucide-react";

import React from "react";

const HomeMovieCarosalCard = ({ carosalItems }) => {
  return (
    <div className="home-carousel-card">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="home-carousel-image"
        style={{
          backgroundImage: `url(${carosalItems.CarouselPoster})`,
        }}
      >
        {/* ==================== IMAGE OVERLAY ==================== */}

        <div className="home-carousel-overlay" />

        {/* ==================== CONTENT ==================== */}

        <div className="home-carousel-content">
          {/* ==================== BADGE ==================== */}

          <div className="home-carousel-badge">NEW RELEASE</div>

          {/* ==================== TITLE ==================== */}

          <h1 className="home-carousel-title">{carosalItems.Title}</h1>

          {/* ==================== META ==================== */}

          <div className="home-carousel-meta">
            <span className="home-carousel-meta-item">
              <Star size={14} fill="currentColor" />
              {carosalItems.Ratings}
            </span>

            <span className="home-carousel-meta-divider">•</span>

            <span className="home-carousel-meta-item">
              <CalendarDays size={14} />
              {carosalItems.Year}
            </span>

            <span className="home-carousel-meta-divider">•</span>

            <span className="home-carousel-meta-item">
              <Clock3 size={14} />
              {carosalItems.Runtime}
            </span>
          </div>

          {/* ==================== PLOT ==================== */}

          <p className="home-carousel-plot">{carosalItems.Plot}</p>

          {/* ==================== ACTIONS ==================== */}

          <div className="home-carousel-actions">
            {/* Watch Now */}

            <button type="button" className="home-carousel-watch-button">
              <Play size={18} fill="currentColor" />

              <span>Watch Now</span>
            </button>

            {/* My List */}

            <button type="button" className="home-carousel-list-button">
              <Plus size={18} />

              <span>My List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMovieCarosalCard;
