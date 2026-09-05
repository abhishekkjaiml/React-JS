/* SearchBar.jsx Page Start */

import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState("");


  /* =====================================================
     CLEAR SEARCH
  ===================================================== */

  const handleClear = () => {
    setSearchValue("");

    if (window.location.pathname === "/search") {
      navigate("/search");
    }
  };

  return (
    <form
      className="search-bar"
    >
      <Search
        size={18}
        className="search-icon"
      />

      <input
        type="text"
        value={searchValue}
        onChange={(event) =>
          setSearchValue(event.target.value)
        }
        placeholder="Search movies, shows and more..."
        className="search-input"
      />

      {searchValue && (
        <button
          type="button"
          className="search-clear"
          onClick={handleClear}
        >
          <X size={16} />
        </button>
      )}
    </form>
  );
};

export default SearchBar;

/* SearchBar.jsx Page End */