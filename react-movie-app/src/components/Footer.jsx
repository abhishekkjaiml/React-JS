import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo */}

          <div className="footer-brand">
            <h2 onClick={() => navigate("/")} className="footer-logo">
              Movie<span className="footer-logo-highlight">App</span>
            </h2>

            <p className="footer-description">
              Discover movies, find cinemas and book your favourite seats with
              ease.
            </p>
          </div>

          {/* Movies */}

          <div>
            <h3 className="footer-heading">Movies</h3>

            <ul className="footer-links">
              <li onClick={() => navigate("/")} className="footer-link">
                Now Showing
              </li>

              <li onClick={() => navigate("/movies")} className="footer-link">
                Upcoming Movies
              </li>

              <li
                onClick={() => navigate("/favourite")}
                className="footer-link"
              >
                Favourites
              </li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="footer-heading">Company</h3>

            <ul className="footer-links">
              <li onClick={() => navigate("/aboutus")} className="footer-link">
                About Us
              </li>

              <li className="footer-link">Contact Us</li>

              <li className="footer-link">Privacy Policy</li>

              <li className="footer-link">Terms & Conditions</li>
            </ul>
          </div>

          {/* Follow */}

          <div>
            <h3 className="footer-heading">Follow Us</h3>

            <div className="footer-socials">
              <button className="footer-social-button">
                <InstagramIcon sx={{ fontSize: 19 }} />
              </button>

              <button className="footer-social-button">
                <FacebookOutlinedIcon sx={{ fontSize: 19 }} />
              </button>

              <button className="footer-social-button">
                <XIcon sx={{ fontSize: 18 }} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 MovieApp. All rights reserved.
          </p>

          <p className="footer-tagline">
            Your movie. Your seat. Your experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
