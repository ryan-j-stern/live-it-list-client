import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './bottom-tabs/bottom-tabs.component';
import LoginPage from '../../pages/login/login.component';

const Stack = createStackNavigator();

const StackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    <Stack.Screen name="login" component={LoginPage} />
    <Stack.Screen name="bottom-tabs" component={BottomTabs} />
  </Stack.Navigator>
);

export default StackNav;
