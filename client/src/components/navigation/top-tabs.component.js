import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CompletedPage from '../../pages/profile/completed.component';
import GoalsPage from '../../pages/profile/goals.component';
import PostsPage from '../../pages/profile/posts.component';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => (
  <Tab.Navigator swipeEnabled={false}>
    <Tab.Screen name="goals" component={GoalsPage} />
    <Tab.Screen name="completed" component={CompletedPage} />
    <Tab.Screen name="posts" component={PostsPage} />
  </Tab.Navigator>
);

export default TopTabs;
