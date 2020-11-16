import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';

import LoginButton from '../../components/login-button/login-button.component';

const LoginPage = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.titleAndMottoContainer}>
      <Text style={styles.title}>LiveItList</Text>
      <Text style={styles.motto}>Life is short. Live it.</Text>
    </View>
    <View style={styles.buttonContainer}>
      {/* <Button
        title="Click here to login"
        onPress={() => navigation.push('bottom-tabs')}
      /> */}
      <LoginButton handlePress={() => navigation.push('bottom-tabs')} />
      {/* <Button
        title="Click here to login"
        onPress={() => navigation.push('bottom-tabs')}
      /> */}
      <LoginButton
        facebook
        handlePress={() => navigation.push('bottom-tabs')}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleAndMottoContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    padding: 20,
  },
  title: {
    fontSize: 75,
  },
  motto: {
    fontSize: 20,
    marginTop: 15,
  },
  buttonContainer: {
    display: 'flex',
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    // borderColor: 'black',
    // borderWidth: 1,
  },
});

export default LoginPage;
