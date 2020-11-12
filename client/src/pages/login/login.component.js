import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LoginPage = ({navigation}) => (
  <View style={styles.container}>
    <Text>Login Page</Text>
    <Button
      title="Click here to login"
      onPress={() => navigation.navigate('bottom-tabs')}
    />
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

export default LoginPage;
