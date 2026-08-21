import React from "react";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero */}

      <div className="about-hero">
        <h1 className="about-title">
          About <span className="about-title-highlight">MovieApp</span>
        </h1>

        <p className="about-description">
          MovieApp is a simple and convenient movie ticket booking platform
          designed to help you discover movies, explore cinemas and book your
          favourite seats with ease.
        </p>
      </div>

      {/* Features */}

      <div className="about-features">
        <div className="about-feature-card">
          <h2 className="about-feature-title">🎬 Discover Movies</h2>

          <p className="about-feature-description">
            Explore movies, check ratings, genres, release years and other
            important movie details.
          </p>
        </div>

        <div className="about-feature-card">
          <h2 className="about-feature-title">🎟️ Easy Booking</h2>

          <p className="about-feature-description">
            Find your preferred cinema, choose a showtime and select your
            favourite seats in just a few steps.
          </p>
        </div>

        <div className="about-feature-card">
          <h2 className="about-feature-title">💺 Choose Your Seat</h2>

          <p className="about-feature-description">
            Select available seats from an interactive cinema seating layout
            before confirming your booking.
          </p>
        </div>
      </div>

      {/* Mission */}

      <div className="about-mission">
        <h2 className="about-mission-title">Our Mission</h2>

        <p className="about-mission-description">
          Our goal is to make the movie-going experience simple, convenient and
          enjoyable — from discovering a movie to getting your seat confirmed.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
