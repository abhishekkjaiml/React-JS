import { Funnel } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MoviesPageNavbar = () => {
  const navigate = useNavigate();

  const [selectedPath, setSelectedPath] = useState(
    window.location.pathname
  );

  const menuItems = [
    {
      name: "All",
      path: "/movies/all_movies",
    },
    {
      name: "Popular",
      path: "/movies/popular",
    },
    {
      name: "Top Rated",
      path: "/movies/top_rated",
    },
    {
      name: "Now Playing",
      path: "/movies/now_playing",
    },
    {
      name: "Upcoming",
      path: "/movies/upcoming",
    },
    {
      name: "Studios",
      path: "/movies/studios",
    },
  ];

  const handleNavigation = (path) => {
    setSelectedPath(path);
    navigate(path);
  };

  return (
    <header className="movies-navbar">
      {/* Navigation + Filter */}
      <div className="movies-navbar-bottom">

        {/* Tabs */}
        <nav className="movies-navbar-menu">
          {menuItems.map((item) => {
            const isActive = selectedPath === item.path;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item.path)}
                className={`movies-navbar-item ${
                  isActive ? "active" : ""
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Filter Button */}
        <button className="movies-filter-btn">
          <Funnel size={18} />
          <span>Filters</span>
        </button>
      </div>
    </header>
  );
};

export default MoviesPageNavbar;