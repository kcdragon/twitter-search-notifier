import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  ListView,
  Text,
  View,
} from 'react-native';

export default class SearchList extends Component {
  static navigationOptions = {
    title: 'Search List',
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows([
        'railsconf',
      ]),
    };
  }

  onAddSearchNotificationPress = () => {
    const { navigate } = this.props.navigation;
    navigate('SearchForm');
  };

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row) => <Text>{row}</Text>}
          />
        <Button
          onPress={this.onAddSearchNotificationPress}
          title="Add search notification"
          />
      </View>
    );
  }
};
