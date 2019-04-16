import axios from 'axios';
import { FETCH_TOP_RATED_DATA, FETCH_LATEST_DATA } from './types';
import { MOVIE_DB_API_KEY } from '../key';

const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTopRatedData = (data) => {
  return {
    type: FETCH_TOP_RATED_DATA,
    data,
  };
};

export const fetchLatestData = (data) => {
  return {
    type: FETCH_LATEST_DATA,
    data,
  };
};

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach((paramName) => baseUrl += `&${paramName}=${queryParams[paramName]}`);
  }
  return baseUrl;
};

export const getTopMovies = (page) => {
  return function action(dispatch) {
    // add loader
    const request = axios.get(createMovieDbUrl('/movie/top_rated', { page }));

    return request.then((response) => {
      dispatch(fetchTopRatedData(response.data));
    }).catch((error) => {
      throw (error);
    });
  };
};

export const getLatestMovies = (page) => {
  return function action(dispatch) {
    // add loader
    const request = axios.get(createMovieDbUrl('/movie/latest', { page }));

    return request.then((response) => {
      dispatch(fetchLatestData(response.data));
    }).catch((error) => {
      throw (error);
    });
  };
};

// export const searchMovies = async ({ page, query}) => {
//   const fullUrl = createMovieDbUrl('/search/movie', {
//     page,
//     query,
//   });
//   return fetch(fullUrl);
// };
//
// export const getMovieDetails = async ({movieId}) => {
//   const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
//   return fetch(fullUrl);
// };
