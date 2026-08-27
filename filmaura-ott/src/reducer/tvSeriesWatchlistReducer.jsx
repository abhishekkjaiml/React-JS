const tvSeriesWatchlistReducer = (state, { type, payload }) => {
    switch(type){
        case 'TV_SERIES_ADD_TO_WISHLIST':
            return{
                ...state,
                tvShowWatchlist: [...state.tvShowWatchlist, payload.series]
            }
        
        case 'TV_SERIES_REMOVE_FROM_WISHLIST':
            return{
                ...state,
                tvShowWatchlist:state.tvShowWatchlist.filter((tv_series) => tv_series._id !== payload.id)
            }
    }
}

export default tvSeriesWatchlistReducer