/* AllStudiosCard.jsx Page Start */

import React from "react";
import { Link } from "react-router-dom";

const AllStudiosCard = ({ stidios }) => {
  return (
    <Link to={`/studio/${stidios._id}`} className="studio-card-link">
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

          <div className="studio-card-overlay" />

          <div className="studio-card-hover-icon">
            <span>Explore Studio</span>
          </div>
        </div>

        {/* =====================================================
            STUDIO INFO
        ===================================================== */}

        <div className="studio-card-info">
          <h3 className="studio-card-title">{stidios.Title}</h3>

          <p className="studio-card-subtitle">Explore Movies</p>
        </div>
      </article>
    </Link>
  );
};

export default AllStudiosCard;

/* AllStudiosCard.jsx Page End */
