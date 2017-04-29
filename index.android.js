import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TwitterSearchNotifier extends Component {
  constructor(props) {
    super(props);
    this.state = { twitterText: '' };
  }

  onSearchPress = () => {
    this.setState({ twitterText: "Search button has been pressed" });
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
