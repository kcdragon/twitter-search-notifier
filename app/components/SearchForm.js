import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import dismissKeyboard from 'dismissKeyboard';

import { addSearch } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddSearch: (search) => {
      dispatch(addSearch(search))
    }
  }
}

class SearchForm extends Component {
  static navigationOptions = {
    title: 'New Search Form',
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  onAddSearch = () => {
    const { search } = this.state;
    const { navigation: { navigate }, onAddSearch } = this.props;

    onAddSearch(search);
    dismissKeyboard();
    navigate('SearchList');
  };

  render() {
    return (
      <View>
        <Text>
          Search term
        </Text>
        <TextInput
          placeholder="Enter a Twitter search..."
          onChangeText={(search) => this.setState({ search })}
          />
        <Button
          onPress={this.onAddSearch}
          title="Save"
          />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
