export const getMovieDetails = async (url, setMovie, setIsLoading, setIsError) => {

    setIsLoading(true)

    try {

      const res = await fetch(url)
      const data = await res.json()

      console.log(data)

      if(data.Response === 'True'){

        setMovie(data)

        setIsError({
          show: false,
          msg: ''
        })

      }else{

        setMovie(null)

        setIsError({
          show: true,
          msg: data.Error
        })

      }

    } catch (error) {

      console.log(error)

      setMovie(null)

      setIsError({
        show: true,
        msg: error.message
      })

    } finally {

      setIsLoading(false)

    }
  }