export const getMovies =   async (url, setIsLoading, setMovies, setIsError) => {
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
                msg: error.message
            })
        }
    }