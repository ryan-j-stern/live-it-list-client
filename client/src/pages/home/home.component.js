import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomePage = () => (
  <View style={styles.container}>
    <Text>Home Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
