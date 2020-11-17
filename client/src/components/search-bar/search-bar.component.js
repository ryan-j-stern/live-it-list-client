import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './search-bar.styles';

const SearchBar = ({...otherProps}) => (
  <View style={styles.searchBarContainer}>
    <TextInput {...otherProps} />
  </View>
);

export default SearchBar;
