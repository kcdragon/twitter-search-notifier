import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

export default class SearchView extends Component {
  onDeletePress() {
    const { navigate } = this.props.navigation;

    navigate('SearchList');
  }

  render() {
    const { search } = this.props.navigation.state.params;
    return (
      <View>
        <Text>
          {search}
        </Text>
        <Button
          onPress={this.onDeletePress}
          title="Delete"
          />
      </View>
    );
  }
}
