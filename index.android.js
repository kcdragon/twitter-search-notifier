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
    this.state = { twitterText: '' };
  }

  getOauthManager = () => {
    const config = {
      twitter: {
        consumer_key: 'SOME_CONSUMER_KEY',
        consumer_secret: 'SOME_CONSUMER_SECRET',
      },
    };
    const oauthManager = new OAuthManager('TwitterSearchNotifier');
    oauthManager.configure(config);
    return oauthManager;
  };

  onSearchPress = () => {
    console.log('onSearchPress starting...');

    const oauthManager = this.getOauthManager();

    console.log('oauthManager retrieved...');

    oauthManager
      .authorize('twitter')
      .then(resp => {
        console.log('Authorize Response -> ', resp);

        const userTimelineUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
        oauthManager
          .makeRequest('twitter', userTimelineUrl)
          .then(resp => console.log('Timeline Response ->', resp.data))
          .catch(err => console.log('Timeline Error ->', err));
      })
      .catch(err => console.log('Authorize Error ->', err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Twitter Search Notifier
        </Text>
        <Button
          onPress={this.onSearchPress}
          title="Search"
          />
        <Text>
          {this.state.twitterText}
        </Text>
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
