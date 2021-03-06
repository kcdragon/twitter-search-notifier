import { REHYDRATE } from 'redux-persist/constants';

import * as types from '../actions/actionTypes';

const initialState = {
  searches: [],
  tweetBySearch: {},
};

const addSearch = (state, action) => {
  const { search } = action.payload;
  return {
    searches: state.searches.concat(search),
  };
}

const removeSearch = (state, action) => {
  const { search } = action.payload;
  return {
    searches: state.searches.filter(s => s !== search),
  };
}

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
  case REHYDRATE:
    const { searches } = action.payload;
    return {
      searches,
    };
  case types.ADD_SEARCH:
    return addSearch(state, action);
  case types.REMOVE_SEARCH:
    return removeSearch(state, action);
  case types.RECEIVE_TWEETS_FOR_SEARCH:
    const newTweetBySearch = Object.assign({}, state.tweetBySearch);
    const { search, tweet } = action.payload;
    newTweetBySearch[search] = tweet;
    return { ...state, tweetBySearch: newTweetBySearch };
  default:
    console.log(`Received unknown action with type: ${action.type}`);
    return state;
  }
}
export default reducers;
