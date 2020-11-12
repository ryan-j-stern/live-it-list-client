import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ProfilePage = ({navigation}) => (
  <View style={styles.container}>
    <Text>Profile Page</Text>
    <Button title="Go Home" onPress={() => navigation.navigate('home')} />
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

export default ProfilePage;
