import { FETCH_DATA } from '../actions/actionTypes';

const initialState = {
  data: {
    results: [],
  },
};

export function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return {
        ...state,
      };
  }
}
