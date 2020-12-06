import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const PostsPage = () => (
  <View style={styles.container}>
    <Text>Posts Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
});

export default PostsPage;
