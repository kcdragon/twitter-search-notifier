import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View,
} from 'react-native';
import OAuthManager from 'react-native-oauth';

export default class TwitterLogin extends Component {
  static navigationOptions = {
    title: 'Twitter Login',
  };

  constructor(props) {
    super(props);
    this.state = {
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
    const { navigate } = this.props.navigation;
    this.oauthManager
      .deauthorize('twitter')
      .then(() => {
        navigate('TwitterLogin');
      });
  }

  onTwitterLoginPress = () => {
    const { navigate } = this.props.navigation;
    this.oauthManager
      .authorize('twitter')
      .then(resp => {
        navigate('SearchList');
      })
      .catch(err => {
        this.logout();
      });
  };

  render() {
    return (
      <View>
        <Button
          onPress={this.onTwitterLoginPress}
          title="Log in with Twitter"
          />
      </View>
    );
  }
};
