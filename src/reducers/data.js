import * as type from '../actions/actionTypes';

const initialState = {
  data: {
    results: [],
  },
  activePage: 1,
  sort: 'popularity.desc',
  genres: [],
  selectedGenres: null,
  year: 'none',
  showPreloader: false,
  showError: false,
  detailsInfo: {},
};

export function data(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_DATA:
      return {
        ...state,
        data: action.data,
      };
    case type.FETCH_GENRES:
      return {
        ...state,
        genres: action.data,
      };
    case type.FETCH_DETAILS_PAGE:
      return {
        ...state,
        detailsInfo: action.data,
      };
    case type.CHANGE_STATUS_PRELOADER:
      return {
        ...state,
        showPreloader: action.status,
      };
    case type.SHOW_ERROR_MODAL:
      return {
        ...state,
        showError: action.status,
      };
    case type.CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage,
      };
    case type.CHANGE_SORT_TYPE:
      return {
        ...state,
        sort: action.sortType,
      };
    case type.CHANGE_SELECTED_YEAR:
      return {
        ...state,
        year: action.value,
      };
    case type.CHANGE_ACTIVE_GENRES:
      return {
        ...state,
        selectedGenres: action.value,
      };
    default:
      return {
        ...state,
      };
  }
}
