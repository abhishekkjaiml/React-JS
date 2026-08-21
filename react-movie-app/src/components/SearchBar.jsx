import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useMovies } from "../context/movie-context";

const SearchBar = () => {
  const { setQuery } = useMovies();

  const [search, setSearch] = useState('')

  const onSearchMovieChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchBtnClick = () => {
    setQuery(search)
  }

  return (
    <div className="w-full h-11 flex items-center rounded-xl border border-gray-200 bg-gray-50 focus-within:border-red-400 focus-within:bg-white transition">
      <SearchOutlinedIcon
        className="ml-4 text-gray-400"
        sx={{ fontSize: 21 }}
      />

      <input
        type="text"
        placeholder="Search movies, actors, genres..."
        className="w-full h-full px-3 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
        onChange={onSearchMovieChange}
      />

      <button
        onClick={() => onSearchBtnClick()}
        className="mr-2 px-3 py-1.5 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:text-red-500 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
