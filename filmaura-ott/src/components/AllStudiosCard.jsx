import React from "react";

const AllStudiosCard = ({ stidios }) => {
  return (
    <article className="studio-card">

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="studio-card-image-wrapper">

        <img
          src={stidios.Poster}
          alt={stidios.Title}
          className="studio-card-image"
        />

        {/* Overlay */}

        <div className="studio-card-overlay" />

        {/* Hover Explore */}

        <div className="studio-card-hover-icon">
          <span>Explore Studio</span>
        </div>

      </div>


      {/* =====================================================
          STUDIO INFO
      ===================================================== */}

      <div className="studio-card-info">

        <h3 className="studio-card-title">
          {stidios.Title}
        </h3>

        <p className="studio-card-subtitle">
          Explore Movies & TV Shows
        </p>

      </div>

    </article>
  );
};

export default AllStudiosCard;