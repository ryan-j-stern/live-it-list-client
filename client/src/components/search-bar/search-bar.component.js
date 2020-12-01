import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './search-bar.styles';

const SearchBar = ({action, ...otherProps}) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput {...otherProps} onChangeText={text => action(text)} />
    </View>
  );
};

export default SearchBar;
