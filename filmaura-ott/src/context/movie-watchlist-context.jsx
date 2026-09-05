import { createContext, useContext, useReducer } from "react";
import movieWatchlistReducer from "../reducer/movieWatchlistReducer";

const MovieWatchlistContext = createContext();

const MovieWatchlistProvider = ({ children }) => {
    
    const initialState = {
        movieWatchlist : []
    }

    const [{ movieWatchlist }, movieWatchlistDispatch] = useReducer(movieWatchlistReducer, initialState)
    return(
        <MovieWatchlistContext.Provider value={{movieWatchlist, movieWatchlistDispatch}}>
            { children }
        </MovieWatchlistContext.Provider>
    )
}

const useMovieWatchlist = () => useContext(MovieWatchlistContext)

export { MovieWatchlistProvider, useMovieWatchlist }