import { createContext, useContext, useEffect, useState } from "react";
import { getMovies } from "../api/getMovies";
import localMovies from '../Data/movies.json'
import marvelMovies from '../Data/Marvel/marvel-all-in-one.json'

export const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState(marvelMovies);
    const [isError, setIsError] = useState({
        show: false,
        msg: ''
    })

    const [query, setQuery] = useState('')

    useEffect(() => {

        if(!query.trim()){
            setMovies(marvelMovies);
            return;
        }

        const timeOut = setTimeout(() => {

            getMovies(
                `${API_URL}&s=${query}`,
                setIsLoading,
                setMovies,
                setIsError,
            )

        }, 500);

        return () => clearTimeout(timeOut)

    },[query])



    console.log(movies)

    return(
        <MovieContext.Provider  value={{movies, setMovies, query, setQuery, isLoading, setIsLoading, isError, setIsError}}>
            { children }
        </MovieContext.Provider>
    )
}

const useMovies = () => useContext(MovieContext);

export {MovieProvider, useMovies}