import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import SearchForm from './app/components/SearchForm';
import SearchList from './app/components/SearchList';
import TwitterLogin from './app/components/TwitterLogin';

const App = StackNavigator({
  Main: { screen: TwitterLogin },
  TwitterLogin: { screen: TwitterLogin },
  SearchList: { screen: SearchList },
  SearchForm: { screen: SearchForm },
});

AppRegistry.registerComponent('TwitterSearchNotifier', () => App);
