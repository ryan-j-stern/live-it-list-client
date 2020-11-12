import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import StackNav from './src/components/navigation/stack.component';

const HomeScreen = () => (
  <View style={styles.app}>
    <Text>Home Screen</Text>
  </View>
);

const WelcomeScreen = ({navigation}) => (
  <View style={styles.app}>
    <Text>Hello World.</Text>
    <Button
      title="Go to home screen"
      onPress={() => navigation.navigate('Home')}></Button>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
