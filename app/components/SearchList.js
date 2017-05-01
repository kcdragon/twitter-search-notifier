import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SearchList extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows([
        'railsconf',
      ])
    };
  }

  onAddSearchNotificationPress = () => {
  };

  render() {
    return (
      <View>
        <Button
          onPress={this.onAddSearchNotificationPress}
          title="Add search notification"
          />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row) => <Text>{row}</Text>}
          />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});
