const movieWishlistReducer = (state, { type, payload }) => {
    switch(type){
        case 'MOVIES_ADD_TO_WISHLIST':
            return{
                ...state,
                // movieWatchlist: [...state.movieWatchlist, payload.movieWatchlist]
                movieWatchlist: [...state.movieWatchlist, payload.movie]
            }

        case 'MOVIES_REMOVE_FROM_WISHLIST':
            return{
                ...state,
                movieWatchlist:state.movieWatchlist.filter((movies) => movies._id !== payload.id)
            }

        default:
            return state
    }
}

export default movieWishlistReducer