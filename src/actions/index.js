import axios from 'axios';
import { FETCH_DATA } from './actionTypes';
import { MOVIE_DB_API_KEY } from '../key';

const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3/movie';

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

export const getMovies = (page = 1, link = '/popular') => {
  return function action(dispatch) {
    // add loader
    const request = axios.get(createMovieDbUrl(link, { page }));

    return request.then((response) => {
      dispatch(fetchData(response.data));
    }).catch((error) => {
      throw (error);
    });
  };
};
