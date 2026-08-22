import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useMovies } from "../context/movie-context";

const SearchBar = () => {
  const { setQuery } = useMovies();

  const [search, setSearch] = useState("");

  const onSearchMovieChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchBtnClick = () => {
    setQuery(search);
  };

  const onSearchKeyDown = (e) => {
    if(e.key === 'Enter'){
      onSearchBtnClick()
    }
  }

  return (
    <div className="search-bar">
      <SearchOutlinedIcon className="search-icon" sx={{ fontSize: 21 }} />

      <input
        type="text"
        placeholder="Search movies, actors, genres..."
        className="search-input"
        value={search}
        onChange={onSearchMovieChange}
        onKeyDown={onSearchKeyDown}
      />

      <button onClick={() => onSearchBtnClick()} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
