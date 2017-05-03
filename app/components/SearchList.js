import React, { Component } from 'react';
import {
  Button,
  ListView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    searches: state.searches
  };
};

class SearchList extends Component {
  static navigationOptions = {
    title: 'Search List',
  };

  constructor(props) {
    super(props);
    const { searches } = this.props;
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
     this.state = {
      dataSource: dataSource.cloneWithRows(searches),
    };
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.searches);
    this.setState({
      dataSource
    });
  }

  onAddSearchNotificationPress = () => {
    const { navigate } = this.props.navigation;
    navigate('SearchForm');
  };

  onSearchRowPress = (row) => {
    const { navigate } = this.props.navigation;
    console.log("onSearchRowPress search: " + JSON.stringify(row));
    navigate('SearchView', { search: row });
  }

  renderRow = (row) => {
    const onSearchRowPress = this.onSearchRowPress;
    return (
      <TouchableHighlight onPress={() => onSearchRowPress(row)}>
        <Text>{row}</Text>
      </TouchableHighlight>
    );
  }

  renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: 'gray',
        }}
        />
    )
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
          />
        <Button
          onPress={this.onAddSearchNotificationPress}
          title="Add search notification"
          />
      </View>
    );
  }
}

export default connect(mapStateToProps)(SearchList);
