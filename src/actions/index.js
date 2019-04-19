import axios from 'axios';
import * as type from './actionTypes';
import { MOVIE_DB_API_KEY } from '../key';

const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';
const KEY_LNG_URL = `?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
const GENRE_DB_BASE_URL = `${MOVIE_DB_BASE_URL}/genre/movie/list${KEY_LNG_URL}`;
const DISCOVER_DB_BASE_URL = `${MOVIE_DB_BASE_URL}/discover/movie${KEY_LNG_URL}`;

export const fetchData = (data) => {
  return {
    type: type.FETCH_DATA,
    data,
  };
};

export const fetchGenres = (data) => {
  const listGenres = [];
  data.map(item => (
    listGenres.push({ value: item.name, label: item.name, id: item.id })
  ));
  return {
    type: type.FETCH_GENRES,
    data: listGenres,
  };
};

export const fetchDetailsPage = (data) => {
  return {
    type: type.FETCH_DETAILS_PAGE,
    data,
  };
};

export const changeStatusPreloader = (status) => {
  return {
    type: type.CHANGE_STATUS_PRELOADER,
    status,
  };
};

export const showError = (status) => {
  return {
    type: type.SHOW_ERROR_MODAL,
    status,
  };
};

export const changeActivePage = (activePage) => {
  return {
    type: type.CHANGE_ACTIVE_PAGE,
    activePage,
  };
};

export const changeSortType = (sortType) => {
  return {
    type: type.CHANGE_SORT_TYPE,
    sortType,
  };
};

export const changeActiveGenres = (value) => {
  return {
    type: type.CHANGE_ACTIVE_GENRES,
    value,
  };
};

export const changeSelectedYear = (value) => {
  return {
    type: type.CHANGE_SELECTED_YEAR,
    value,
  };
};

const createMovieDbUrl = (queryParams) => {
  let baseUrl = `${DISCOVER_DB_BASE_URL}`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach((paramName) => baseUrl += `&${paramName}=${queryParams[paramName]}`);
  }
  return baseUrl;
};

export const getMovies = (page = 1, sort_by = 'popularity.desc', year = 'none', withGenres = null) => {
  return function action(dispatch) {
    dispatch(changeStatusPreloader(true));
    const request = axios.get(createMovieDbUrl({
      sort_by,
      page,
      year,
      ...(withGenres ? { with_genres: withGenres } : {}),
    }));

    return request.then((response) => {
      dispatch(fetchData(response.data));
      dispatch(changeStatusPreloader(false));
    }).catch((error) => {
      dispatch(showError(true));
      dispatch(changeStatusPreloader(false));
      throw (error);
    });
  };
};

export const getGenres = () => {
  return function action(dispatch) {
    const request = axios.get(GENRE_DB_BASE_URL);

    return request.then((response) => {
      dispatch(fetchGenres(response.data.genres));
    }).catch((error) => {
      throw (error);
    });
  };
};

export const getDetails = (id) => {
  return function action(dispatch) {
    dispatch(changeStatusPreloader(true));
    const request = axios.get(`${MOVIE_DB_BASE_URL}/movie/${id}${KEY_LNG_URL}`);

    return request.then((response) => {
      dispatch(fetchDetailsPage(response.data));
      dispatch(changeStatusPreloader(false));
    }).catch((error) => {
      dispatch(showError(true));
      dispatch(changeStatusPreloader(false));
      throw (error);
    });
  };
};
