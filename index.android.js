import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import OAuthManager from 'react-native-oauth';

import SearchList from './app/components/SearchList';
import TwitterLogin from './app/components/TwitterLogin';

export default class TwitterSearchNotifier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    const config = {
      twitter: {
        consumer_key: 'SOME_CONSUMER_KEY',
        consumer_secret: 'SOME_CONSUMER_SECRET',
      },
    };
    this.oauthManager = new OAuthManager('TwitterSearchNotifier');
    this.oauthManager.configure(config);
  }

  logout() {
    this.oauthManager
      .deauthorize('twitter')
      .then(() => {
        this.setState({
          isLoggedIn: false,
        });
      });
  }

  onLogout = () => {
    this.logout();
  };

  onTwitterLoginPress = () => {
    console.log('onTwitterLoginPress');

    this.oauthManager
      .authorize('twitter')
      .then(resp => {
        console.log('Authorize Response -> ', resp);
        this.setState({
          isLoggedIn: true,
        });
      })
      .catch(err => {
        console.log('Authorize Error ->', err)
        this.setState({
          isLoggedIn: false,
        });
      });
  }

  onSearchPress = () => {
    console.log('onSearchPress');

    const searchUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=%40railsconf';
    this.oauthManager
      .makeRequest('twitter', searchUrl)
      .then(resp => {
        console.log('Search Response ->', resp.data);
      })
      .catch(err => {
        console.log('Search Error ->', err);
        this.logout();
      });
  };

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isLoggedIn ?
          <View>
            <Button
              onPress={this.onLogout}
              title="Log out"
              />
            <SearchList />
          </View>
          :
          <TwitterLogin onPress={this.onTwitterLoginPress} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

AppRegistry.registerComponent('TwitterSearchNotifier', () => TwitterSearchNotifier);
