import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TwitterLogin extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <View>
        <Text style={styles.header}>Please log in to Twitter</Text>
        <Button
          onPress={onPress}
          title="Log in with Twitter"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});
