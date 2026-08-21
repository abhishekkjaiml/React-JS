const favouriteMovieReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_MOVIE_TO_FAVOURITE":
      return {
        ...state,
        favourite: [...state.favourite, payload.movie],
      };

    case 'REMOVE_MOVIE_FROM_FAVOURITE':
      return{
        ...state,
        favourite: state.favourite.filter((movie) => movie.imdbID !== payload.id )
      }

    default:
      return state;
  }
};

export default favouriteMovieReducer;
