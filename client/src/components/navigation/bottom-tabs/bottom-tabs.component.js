import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddGoal from '../../../pages/add-goal/add-goal.component';
import {
  HomeStackScreen,
  ProfileStackScreen,
} from './bottom-stack-screens.component';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="home" component={HomeStackScreen} />
    <Tabs.Screen name="add" component={AddGoal} />
    <Tabs.Screen name="profile" component={ProfileStackScreen} />
  </Tabs.Navigator>
);

export default BottomTabs;
