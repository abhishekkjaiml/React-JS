/* search-context.jsx Page Start */

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { useMovies } from "./movie-context";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const {
    getallMovies,
    getAllSeries,
  } = useMovies();

  const [search, setSearch] = useState("");

  /* =====================================================
     SEARCH VALUE
  ===================================================== */

  const handleSearch = (value) => {
    setSearch(value);
  };

  /* =====================================================
     SEARCH HELPER
  ===================================================== */

  const createSearchText = (item) => {
    const values = [
      item?.Title,
      item?.Genre,
      item?.Director,
      item?.Actors,
      item?.Plot,
      item?.Language,
      item?.Universe,
      item?.Studio,
      item?.Rated,
    ];

    return values
      .flat(Infinity)
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  };

  /* =====================================================
     FILTER MOVIES
  ===================================================== */

  const filteredMovies = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return [];
    }

    return (
      getallMovies?.filter((movie) => {
        const movieSearchText =
          createSearchText(movie);

        return movieSearchText.includes(searchValue);
      }) || []
    );
  }, [search, getallMovies]);

  /* =====================================================
     FILTER TV SERIES
  ===================================================== */

  const filteredSeries = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return [];
    }

    return (
      getAllSeries?.filter((series) => {
        const seriesSearchText =
          createSearchText(series);

        return seriesSearchText.includes(searchValue);
      }) || []
    );
  }, [search, getAllSeries]);

  /* =====================================================
     TOTAL RESULTS
  ===================================================== */

  const totalResults =
    filteredMovies.length +
    filteredSeries.length;

  /* =====================================================
     CLEAR SEARCH
  ===================================================== */

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        handleSearch,
        clearSearch,
        filteredMovies,
        filteredSeries,
        totalResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () =>
  useContext(SearchContext);

export {
  SearchProvider,
  useSearch,
};

/* search-context.jsx Page End */