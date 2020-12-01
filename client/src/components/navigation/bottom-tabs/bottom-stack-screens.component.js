import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '../../../pages/home/home.component';
import ProfilePage from '../../../pages/profile/profile.component';

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
