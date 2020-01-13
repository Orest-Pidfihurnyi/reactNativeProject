import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import SavedScreen from '../screens/Saved/Saved';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';

const routes = {
  [screens.Saved]: SavedScreen,
  [screens.ProductDetails]: ProductDetailsScreen,
};

export default createStackNavigator(routes, {
  navigationOptions: {
    tabBarLabel: 'Saved',
    tabBarIcon: ({ tintColor }) => {
      return (
        <Ionicons name="ios-bookmark" size={32} color={tintColor} />
      );
    },
  },
  headerLayoutPreset: 'center',
});
