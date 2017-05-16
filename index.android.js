import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import SearchForm from './app/components/SearchForm';
import SearchList from './app/components/SearchList';
import SearchView from './app/components/SearchView';
import TwitterLogin from './app/components/TwitterLogin';

import store from './app/store';

const App = StackNavigator({
  Main: { screen: SearchList },
  TwitterLogin: { screen: TwitterLogin },
  SearchList: { screen: SearchList },
  SearchForm: { screen: SearchForm },
  SearchView: { screen: SearchView },
});

class AppWithPersistence extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TwitterSearchNotifier', () => AppWithPersistence);
