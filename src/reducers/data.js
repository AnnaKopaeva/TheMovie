import { FETCH_LATEST_DATA, FETCH_TOP_RATED_DATA } from '../actions/types';

const initialState = {
  activeSortType: 'topRated',
  data: {
    latest: {},
    topRated: {},
  },
};

export function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_RATED_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          topRated: action.data,
        },
      };
    case FETCH_LATEST_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          latest: action.data,
        },
      };
    default:
      return {
        ...state,
      };
  }
}
