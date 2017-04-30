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
      .then(resp => console.log('Search Response ->', resp.data))
      .catch(err => console.log('Search Error ->', err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Twitter Search Notifier
        </Text>
        <Button
          onPress={this.onTwitterLoginPress}
          title="Log in with Twitter"
          />
        <Text>
          { this.state.isLoggedIn ? 'Login successful!' : 'Please log in.' }
        </Text>
        <Button
          onPress={this.onSearchPress}
          title="Search"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TwitterSearchNotifier', () => TwitterSearchNotifier);
