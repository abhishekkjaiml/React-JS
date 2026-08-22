import { createContext, useContext, useState, useEffect } from "react";
import HomeCarosalMovie from '../db/movieCarousel.json'
import TrandingMovies from '../db/HomeTrandingMovies.json'

const MovieConttext = createContext();

const MovieProvider = ({ children }) => {

    const [homeCarosalMovies, setHomeCarosalMovies] = useState(HomeCarosalMovie);
    const [homeTrandingMovies, setHomeTrandingMovies] = useState(TrandingMovies)

    return(
        <MovieConttext.Provider     value={{ homeCarosalMovies , homeTrandingMovies}}>
            { children }
        </MovieConttext.Provider>
    )
}

const useMovies = () => useContext(MovieConttext);

export { MovieProvider, useMovies, }