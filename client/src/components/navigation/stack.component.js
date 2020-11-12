import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './bottom-tabs.component';
import LoginPage from '../../pages/login/login.component';

const Stack = createStackNavigator();

const StackNav = () => (
  <Stack.Navigator screenOptions={{headerShown: false, headerLeft: null}}>
    <Stack.Screen
      name="login"
      options={{headerShown: false}}
      component={LoginPage}
    />
    <Stack.Screen name="bottom-tabs" component={BottomTabs} />
  </Stack.Navigator>
);

export default StackNav;
