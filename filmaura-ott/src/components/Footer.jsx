import { Mail } from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../assets/filmaura_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* =================================================
            FOOTER GRID
        ================================================= */}

        <div className="footer-grid">
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">
            <Link to="/">
              <img src={logo} alt="FilmAura" className="footer-logo" />
            </Link>

            <p className="footer-text">
              Discover movies, TV shows and unforgettable stories. Everything
              you love, all in one place.
            </p>

            {/* ==================== SOCIAL ==================== */}

            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Instagram">
                ◎
              </a>

              <a href="#" className="footer-social" aria-label="X">
                𝕏
              </a>

              <a href="#" className="footer-social" aria-label="Facebook">
                f
              </a>

              <a href="#" className="footer-social" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div className="footer-column">
            <h3>Explore</h3>

            <Link to="/movies">Movies</Link>

            <Link to="/shows">TV Shows</Link>

            <Link to="/explore">Explore</Link>

            <Link to="/my_list">My List</Link>

            <Link to="/watchlist">Watchlist</Link>
          </div>

          {/* =================================================
              COMPANY
          ================================================= */}

          <div className="footer-column">
            <h3>Company</h3>

            <Link to="/about">About Us</Link>

            <Link to="/contact">Contact Us</Link>

            <Link to="/careers">Careers</Link>

            <Link to="/help">Help & Support</Link>

            <Link to="/plans">Premium</Link>
          </div>

          {/* =================================================
              LEGAL
          ================================================= */}

          <div className="footer-column">
            <h3>Legal</h3>

            <Link to="/privacy">Privacy Policy</Link>

            <Link to="/terms">Terms of Service</Link>

            <Link to="/cookies">Cookie Policy</Link>

            <Link to="/security">Security</Link>
          </div>

          {/* =================================================
              NEWSLETTER
          ================================================= */}

          <div className="footer-newsletter">
            <div className="footer-mail-icon">
              <Mail size={18} />
            </div>

            <h3>Stay updated</h3>

            <p>
              Get the latest movies, shows and FilmAura updates directly in your
              inbox.
            </p>

            <div className="footer-input-wrapper">
              <input type="email" placeholder="Enter your email" />

              <button type="button" aria-label="Subscribe">
                <Mail size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="footer-divider" />

        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FilmAura. All rights reserved.</p>

          <div className="footer-links">
            <Link to="/privacy">Privacy</Link>

            <span>•</span>

            <Link to="/terms">Terms</Link>

            <span>•</span>

            <Link to="/cookies">Cookies</Link>
          </div>

          <p className="footer-made">Made for movie lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
