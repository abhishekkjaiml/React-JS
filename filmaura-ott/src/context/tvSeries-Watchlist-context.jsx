import { createContext, useContext, useReducer } from "react";
import tvSeriesWatchlistReducer from "../reducer/tvSeriesWatchlistReducer";

const TvShowWatchlistContext = createContext();

const TvShowWatchlistProvider = ({ children }) => {

    const initialState = {
        tvShowWatchlist: []
    }

    const [{ tvShowWatchlist }, tvShowWatchlistDispatch] = useReducer(tvSeriesWatchlistReducer, initialState)
    return(
        <TvShowWatchlistContext.Provider    value={{ tvShowWatchlist, tvShowWatchlistDispatch }}>
            { children }
        </TvShowWatchlistContext.Provider>
    )
}

const useTvSeriesWatchlist = () => useContext(TvShowWatchlistContext);

export { TvShowWatchlistProvider, useTvSeriesWatchlist }