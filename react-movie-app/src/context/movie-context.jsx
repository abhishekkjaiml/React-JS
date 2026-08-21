import { createContext, useContext, useEffect, useState } from "react";

export const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState({
        show: false,
        msg: ''
    })

    const [query, setQuery] = useState('titanic')

    const getMovies =   async (url) => {
        setIsLoading(true)

        try {
            
            const res = await fetch(url);
            const data = await res.json()
            console.log(data);

            if(data.Response == 'True'){

                setIsLoading(false)

                setIsError({
                    show: false,
                    msg: ''
                })

                setMovies(data.Search)
            }else{
                setIsLoading(false)

                setMovies([])

                setIsError({
                    show: true,
                    msg: data.Error
                })
            }
        } catch (error) {
            setIsLoading(false)

            setMovies([])

            setIsError({
                show: true,
                msg: data.Error
            })
        }
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 1000);

        return () => clearTimeout(timeOut)
    },[query])

    return(
        <MovieContext.Provider  value={{movies, query, setQuery, isLoading, isError}}>
            { children }
        </MovieContext.Provider>
    )
}

const useMovies = () => useContext(MovieContext);

export {MovieProvider, useMovies}