import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { removeSearch } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveSearch: (search) =>
      dispatch(removeSearch(search))
  }
}

class SearchView extends Component {
  onDeletePress = () => {
    const {
      onRemoveSearch,
      navigation: { navigate },
    } = this.props;

    onRemoveSearch(this.getSearch());
    navigate('SearchList');
  };

  getSearch = () => this.props.navigation.state.params.search;

  render() {
    // TODO display search in navigation header
    return (
      <View>
        <Text>
          {this.getSearch()}
        </Text>
        <Button
          onPress={this.onDeletePress}
          title="Delete"
          />
      </View>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(SearchView);
