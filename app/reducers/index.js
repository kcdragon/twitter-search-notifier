import { REHYDRATE } from 'redux-persist/constants';

import * as types from '../actions/actionTypes';

const initialState = {
  searches: [],
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
  case REHYDRATE:
    const { searches } = action.payload;
    return {
      searches,
    };
  case types.ADD_SEARCH:
    const { search } = action.payload;
    return {
      searches: state.searches.concat(search),
    };
  default:
    console.log(`Received unknown action with type: ${action.type}`);
    return state;
  }
}
export default reducers;
