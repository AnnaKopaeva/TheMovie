import { FETCH_DATA } from '../actions/types';

const initialState = {
  data: {},
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
