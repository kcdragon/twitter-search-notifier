import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View,
} from 'react-native';
import oauthManager from '../TwitterOAuthManager';

export default class TwitterLogin extends Component {
  static navigationOptions = {
    title: 'Twitter Login',
  };

  logout() {
    const { navigate } = this.props.navigation;
    oauthManager
      .deauthorize('twitter')
      .then(() => {
        navigate('TwitterLogin');
      });
  }

  onTwitterLoginPress = () => {
    const { navigate } = this.props.navigation;
    oauthManager
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
