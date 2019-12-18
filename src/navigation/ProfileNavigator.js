import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';
import Profile from '../screens/Profile/Profile';
import screens from './screens';

const routes = {
  [screens.Profile]: Profile,
};

export default createStackNavigator(routes, {
  navigationOptions: {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => {
      return <FontAwesome name="user" size={20} color={tintColor} />;
    },
  },
  headerLayoutPreset: 'center',
});
