import { AsyncStorage } from 'react-native';
import { compose, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';

// add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(logger),
    autoRehydrate()
  )
);

// persistStore(store, { storage: AsyncStorage }).purge();
persistStore(store, { storage: AsyncStorage });

export default store;
