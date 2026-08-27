import { createContext, useContext, useReducer } from "react";
import movieWishlistReducer from "../reducer/movieWishlistReducer";

const MovieWatchlistContext = createContext();

const MovieWatchlistProvider = ({ children }) => {
    
    const initialState = {
        movieWatchlist : []
    }

    const [{ movieWatchlist }, movieWatchlistDispatch] = useReducer(movieWishlistReducer, initialState)
    return(
        <MovieWatchlistContext.Provider value={{movieWatchlist, movieWatchlistDispatch}}>
            { children }
        </MovieWatchlistContext.Provider>
    )
}

const useMovieWatchlist = () => useContext(MovieWatchlistContext)

export { MovieWatchlistProvider, useMovieWatchlist }