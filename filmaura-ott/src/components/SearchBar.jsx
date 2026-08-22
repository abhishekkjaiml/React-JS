import { Search, X } from "lucide-react";

import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  /* =====================================================
     CLEAR SEARCH
  ===================================================== */

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="search-bar">
      {/* ==================== SEARCH ICON ==================== */}

      <Search size={19} className="search-icon" />

      {/* ==================== INPUT ==================== */}

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search movies, shows and more..."
        className="search-input"
      />

      {/* ==================== CLEAR ==================== */}

      {search.length > 0 && (
        <button
          type="button"
          className="search-clear"
          onClick={clearSearch}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
