import * as types from './actionTypes';
// import { fetchSearch } from '../services';

export function addSearch(search) {
  return (dispatch) => {
    const tweet = { id: 1, text: 'A tweet!' };

    dispatch({
      type: types.ADD_SEARCH,
      payload: {
        search
      }
    });
  };
}

export function removeSearch(search) {
  return {
    type: types.REMOVE_SEARCH,
    payload: {
      search
    }
  };
};

export function receiveTweetForSearch(search, tweet) {
  return {
    type: types.RECEIVE_TWEETS_FOR_SEARCH,
    payload: {
      search,
      tweet,
    }
  }
};
