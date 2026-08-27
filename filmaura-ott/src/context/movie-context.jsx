import { createContext, useContext, useState, useEffect } from "react";
import HomeCarosalMovie from '../db/movieCarousel.json'
import TrandingMovies from '../db/HomeTrandingMovies.json'
import allMovies from '../db/Marvel/newMovies.json'
import allStudios from '../db/allStudios.json'
import allSeries from '../db/Marvel/Series/moon_knight.json'

const MovieConttext = createContext();

const MovieProvider = ({ children }) => {

    // console.log(allSeries)

    const [homeCarosalMovies, setHomeCarosalMovies] = useState(HomeCarosalMovie);
    const [homeTrandingMovies, setHomeTrandingMovies] = useState(TrandingMovies);
    const [getallMovies, setGetAllMovies] = useState(allMovies);
    const [getAllStudios, setGetAllStudios] = useState(allStudios);
    const [getAllSeries, setGetAllSeries] = useState(allSeries);

    return(
        <MovieConttext.Provider     value={{ 
            getallMovies,
            homeCarosalMovies, 
            homeTrandingMovies,
            getAllStudios,
            getAllSeries
            }}>
            { children }
        </MovieConttext.Provider>
    )
}

const useMovies = () => useContext(MovieConttext);

export { MovieProvider, useMovies, }