import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {View, Text, StyleSheet, ScrollView} from 'react-native';

import HomePage from '../../../pages/home/home.component';
import ProfilePage from '../../../pages/profile/profile.component';
import TopTabs from '../top-tabs.component';

/**
 * These stacks will be used to allow us to navigate within the same tab
 */

const Stack = createStackNavigator();

export const ProfileStackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="profile" component={ProfilePage} />
  </Stack.Navigator>
);

export const HomeStackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerLeft: null,
    }}>
    <Stack.Screen name="home" component={HomePage} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  userInfo: {
    display: 'flex',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
