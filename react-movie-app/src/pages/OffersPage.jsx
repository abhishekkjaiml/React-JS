const OffersPage = () => {
  return (
    <div className="offers-container">
      {/* Heading */}

      <div className="offers-heading">
        <h1 className="offers-title">Offers & Deals</h1>

        <p className="offers-description">
          Enjoy exciting offers and save more on your movie bookings.
        </p>
      </div>

      {/* Offers */}

      <div className="offers-grid">
        {/* Offer 1 */}

        <div className="offer-card">
          <div className="offer-header">
            <span className="offer-icon">🎟️</span>

            <span className="offer-discount">20% OFF</span>
          </div>

          <h2 className="offer-title">Movie Night Special</h2>

          <p className="offer-description">
            Get 20% off on your movie ticket booking. Make your movie night even
            better.
          </p>

          <div className="offer-footer">
            <span className="offer-code">Code: MOVIE20</span>

            <button className="offer-apply">Apply</button>
          </div>
        </div>

        {/* Offer 2 */}

        <div className="offer-card">
          <div className="offer-header">
            <span className="offer-icon">🍿</span>

            <span className="offer-discount">₹100 OFF</span>
          </div>

          <h2 className="offer-title">Weekend Offer</h2>

          <p className="offer-description">
            Get flat ₹100 off on selected weekend movie bookings.
          </p>

          <div className="offer-footer">
            <span className="offer-code">Code: WEEKEND100</span>

            <button className="offer-apply">Apply</button>
          </div>
        </div>

        {/* Offer 3 */}

        <div className="offer-card">
          <div className="offer-header">
            <span className="offer-icon">⭐</span>

            <span className="offer-discount">15% OFF</span>
          </div>

          <h2 className="offer-title">First Booking</h2>

          <p className="offer-description">
            New to MovieApp? Get 15% off on your first movie ticket booking.
          </p>

          <div className="offer-footer">
            <span className="offer-code">Code: WELCOME15</span>

            <button className="offer-apply">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
