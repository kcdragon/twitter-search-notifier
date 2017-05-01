import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

export default class SearchForm extends Component {
  static navigationOptions = {
    title: 'New Search Form',
  };

  render() {
    return (
      <View>
        <Text>
          Search term
        </Text>
        <TextInput
          />
      </View>
    );
  }
}
