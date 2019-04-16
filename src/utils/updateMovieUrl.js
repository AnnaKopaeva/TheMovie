const TMDB_IMAGE_BASE_URL = (width = 185) => `https://image.tmdb.org/t/p/w${width}`;

const updateMoviePictureUrls = (movieResult, width = 185) => ({
  ...movieResult,
  backdrop_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
  poster_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.poster_path}`,
});

export const getMoviesList = moviesResponse => (
  !!moviesResponse ? ([
    ...moviesResponse.results.map(movieResult => updateMoviePictureUrls(movieResult)),
  ]) : null
);
