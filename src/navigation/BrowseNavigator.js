import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import BrowseScreen from '../screens/Browse/Browse';
import screens from './screens';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import ProfileScreen from '../screens/Profile/Profile';

const routes = {
  [screens.Browse]: BrowseScreen,
  [screens.ProductDetails]: ProductDetailsScreen,
  [screens.Profile]: ProfileScreen,
};

export default createStackNavigator(routes, {
  navigationOptions: {
    tabBarLabel: 'Browse',
    tabBarIcon: ({ tintColor }) => {
      return (
        <Ionicons name="md-search" size={32} color={tintColor} />
      );
    },
  },
  headerMode: 'screen',
});
