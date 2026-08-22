import { Bell, ChevronDown, User } from "lucide-react";

import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* =================================================
          SEARCH
      ================================================= */}

      <div className="navbar-search">
        <SearchBar />
      </div>

      {/* =================================================
          NAVBAR ACTIONS
      ================================================= */}

      <div className="navbar-actions">
        {/* ==================== NOTIFICATION ==================== */}

        <button
          type="button"
          className="navbar-notification"
          aria-label="Notifications"
        >
          <Bell size={19} />

          <span className="notification-dot" />
        </button>

        {/* ==================== PROFILE ==================== */}

        <button type="button" className="navbar-profile">
          <div className="navbar-avatar">
            <User size={18} />
          </div>

          <span className="navbar-name">Abhishek</span>

          <ChevronDown size={17} className="navbar-chevron" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
