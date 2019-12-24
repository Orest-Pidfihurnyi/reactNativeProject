import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import SavedScreen from '../screens/Saved/Saved';

const routes = {
  [screens.Saved]: SavedScreen,
};

export default createStackNavigator(routes, {
  navigationOptions: {
    tabBarLabel: 'Saved',
    tabBarIcon: ({ tintColor }) => {
      return <Feather name="bookmark" size={20} color={tintColor} />;
    },
  },
  headerLayoutPreset: 'center',
});
