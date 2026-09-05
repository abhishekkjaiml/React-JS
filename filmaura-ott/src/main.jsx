import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import { MovieProvider } from "./context/movie-context";
import { MovieWatchlistProvider } from "./context/movie-watchlist-context";
import { TvShowWatchlistProvider } from "./context/tvSeries-Watchlist-context";
import { SearchProvider } from "./context/search-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <SearchProvider>
          <MovieWatchlistProvider>
          <TvShowWatchlistProvider>
            <App />
          </TvShowWatchlistProvider>
        </MovieWatchlistProvider>
        </SearchProvider>
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
);