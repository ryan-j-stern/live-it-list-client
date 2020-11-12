import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '../../pages/home/home.component';
import ProfilePage from '../../pages/profile/profile.component';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="profile"
      options={{headerShown: false}}
      component={ProfilePage}
    />
  </Stack.Navigator>
);

const HomeStackScreen = () => (
  <Stack.Navigator screenOptions={{headerLeft: null}}>
    <Stack.Screen name="home" component={HomePage} />
  </Stack.Navigator>
);

const BottomTabs = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="home" component={HomeStackScreen} />
    <Tabs.Screen name="profile" component={ProfileStackScreen} />
  </Tabs.Navigator>
);

export default BottomTabs;
