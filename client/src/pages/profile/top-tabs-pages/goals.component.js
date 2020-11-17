import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../../../components/search-bar/search-bar.component';

const GoalsPage = () => (
  <View style={styles.container}>
    <SearchBar placeholder="Search Your Goals" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

export default GoalsPage;
