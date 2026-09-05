const findMyMoviesInWatchlist = (movieWatchlist, movieId) => movieWatchlist.length > 0 && movieWatchlist.some((movies) => movies._id === movieId) 

const findMyTvSeriesInWatchlist = (tvShowWatchlist, tvShowId) => tvShowWatchlist.length > 0 && tvShowWatchlist.some((tv_Shows) => tv_Shows._id === tvShowId) 

export { findMyMoviesInWatchlist, findMyTvSeriesInWatchlist }