import * as types from './actionTypes';

export function addSearch(search) {
  return {
    type: types.ADD_SEARCH,
    payload: {
      search
    }
  };
}
