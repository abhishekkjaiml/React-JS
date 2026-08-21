import { createContext, useContext, useReducer } from "react";
import favouriteMovieReducer from "../reducers/favouriteMovieReducer";

const FavouriteMovieContext = createContext();

const FavouriteMovieProvider = ({ children }) => {

    const initialState = {
        favourite: []
    }

    const [{favourite}, favouriteMovieDispatch] = useReducer(favouriteMovieReducer, initialState)
    return(
        <FavouriteMovieContext.Provider    value={{favourite, favouriteMovieDispatch}} >
            { children }
        </FavouriteMovieContext.Provider>
    )
}

const useFavouriteMovieCart = () => useContext(FavouriteMovieContext)

export { FavouriteMovieProvider, useFavouriteMovieCart}