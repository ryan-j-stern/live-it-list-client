import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchBar from '../../components/search-bar/search-bar.component';

const HomePage = () => (
  <View style={styles.container}>
    <SearchBar placeholder="Search For Friends" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
});

export default HomePage;
