import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import BrowseScreen from '../screens/Browse/Browse';
import screens from './screens';

const routes = {
  [screens.Browse]: BrowseScreen,
};

export default createStackNavigator(routes, {
  navigationOptions: {
    tabBarLabel: 'Browse',
    tabBarIcon: ({ tintColor }) => {
      return (
        <Ionicons name="md-search" size={20} color={tintColor} />
      );
    },
  },
  headerLayoutPreset: 'center',
});
