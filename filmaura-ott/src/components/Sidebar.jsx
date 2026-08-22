import {
  ArrowRight,
  BookmarkPlus,
  CircleHelp,
  CirclePlay,
  Clapperboard,
  Compass,
  Crown,
  Heart,
  House,
  PanelLeftClose,
  PanelLeftOpen,
  RotateCcwClock,
  Settings,
  TvMinimal,
  Package,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/filmaura_logo.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  /* =====================================================
     ACTIVE MENU
  ===================================================== */

  const [selectedPath, setSelectedPath] = useState(window.location.pathname);

  /* =====================================================
     MAIN MENU
  ===================================================== */

  const menuItems = [
    {
      name: "Home",
      icon: House,
      path: "/",
    },
    {
      name: "Movies",
      icon: Clapperboard,
      path: "/movies",
    },
    {
      name: "TV Shows",
      icon: TvMinimal,
      path: "/shows",
    },
    {
      name: 'Category',
      icon: Package,
      path: '/category'
    },
    {
      name: "My List",
      icon: BookmarkPlus,
      path: "/my_list",
    },
    {
      name: "Watchlist",
      icon: Heart,
      path: "/watchlist",
    },
    {
      name: "Continue Watching",
      icon: CirclePlay,
      path: "/continue_watching",
    },
    {
      name: "History",
      icon: RotateCcwClock,
      path: "/history",
    },
    {
      name: "Explore",
      icon: Compass,
      path: "/explore",
    },
  ];

  /* =====================================================
     SETTINGS MENU
  ===================================================== */

  const settingsItems = [
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
    },
    {
      name: "Help & Support",
      icon: CircleHelp,
      path: "/help",
    },
  ];

  /* =====================================================
     GET ACTIVE STYLE
  ===================================================== */

  const getStyle = (path) => {
    if (selectedPath === path) {
      return "sidebar-item active";
    }

    return "sidebar-item";
  };

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const handleNavigation = (path) => {
    setSelectedPath(path);

    navigate(path);
  };

  /* =====================================================
     TOGGLE SIDEBAR
  ===================================================== */

  const handleSidebarToggle = () => {
    setIsOpen((previousState) => {
      return !previousState;
    });
  };

  return (
    <aside className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      <div className="sidebar-inner">
        {/* =================================================
            SIDEBAR HEADER
        ================================================= */}

        <div className="sidebar-header">
          <img src={logo} alt="FilmAura" className="sidebar-logo" />

          <button
            type="button"
            onClick={handleSidebarToggle}
            className="sidebar-toggle"
            aria-label="Toggle sidebar"
          >
            {isOpen ? (
              <PanelLeftClose size={19} />
            ) : (
              <PanelLeftOpen size={19} />
            )}
          </button>
        </div>

        {/* =================================================
            SIDEBAR NAVIGATION
        ================================================= */}

        <div className="sidebar-nav">
          {/* ==================== MAIN MENU ==================== */}

          <ul className="sidebar-menu">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <button
                    type="button"
                    title={!isOpen ? item.name : ""}
                    onClick={() => handleNavigation(item.path)}
                    className={getStyle(item.path)}
                  >
                    <Icon size={20} />

                    <span>{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ==================== DIVIDER ==================== */}

          <div className="sidebar-menu-divider" />

          {/* ==================== SETTINGS ==================== */}

          <ul className="sidebar-menu">
            {settingsItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <button
                    type="button"
                    title={!isOpen ? item.name : ""}
                    onClick={() => handleNavigation(item.path)}
                    className={getStyle(item.path)}
                  >
                    <Icon size={20} />

                    <span>{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* =================================================
            PREMIUM CARD
        ================================================= */}

        <div className="premium-card">
          {/* ==================== PREMIUM HEADER ==================== */}

          <div className="premium-header">
            <div className="premium-icon">
              <Crown size={18} />
            </div>

            <span className="premium-title">FILMAURA PREMIUM</span>
          </div>

          {/* ==================== PREMIUM CONTENT ==================== */}

          <h3 className="premium-heading">Go ad-free.</h3>

          <p className="premium-description">
            Enjoy unlimited entertainment and exclusive benefits.
          </p>

          {/* ==================== PREMIUM BUTTON ==================== */}

          <button
            type="button"
            className="premium-button"
            onClick={() => handleNavigation("/plans")}
          >
            <span>Upgrade Now</span>

            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
