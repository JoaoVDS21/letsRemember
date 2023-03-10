import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import CustomTabBar from '../components/CustomTabBar'

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator tabBar={props => <CustomTabBar {...props}/>}>
    <Tab.Screen name="Home" component={Home}/>
  </Tab.Navigator>
)