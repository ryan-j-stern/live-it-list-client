import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const GoalsPage = () => (
  <View style={styles.container}>
    <Text>Goals Page</Text>
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
