import axios from 'axios';
import { FETCH_DATA } from './types';
import { MOVIE_DB_API_KEY } from '../key';

const MOVIE_DB_BASE_URL = 'http://api.themoviedb.org/3';

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
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
    dispatch({ type: FETCH_DATA });
    const request = axios.get(createMovieDbUrl('/movie/top_rated', { page }));

    return request.then((response) => {
      dispatch(fetchData(response.data));
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
