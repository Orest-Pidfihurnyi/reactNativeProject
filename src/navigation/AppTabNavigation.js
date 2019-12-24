import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import createPostNavigation from '../navigation/createPostNavigator';
import BrowseNavigator from '../navigation/BrowseNavigator';
import InboxNavigator from '../navigation/InboxNavigator';
import CustomTabBarBottom from './components/CustomTabBar';
import SavedNavigator from '../navigation/SavedNavigator';
import ProfileNavigator from '../navigation/ProfileNavigator';
import Empty from '../screens/Empty/Empty';
import screens from './screens';
import colors from '../styles/colors';
import CreatePostButton from '../components/CreatePostButton/CreatePostButton';

const routes = {
  [screens.BrowseTab]: BrowseNavigator,
  [screens.SavedTab]: SavedNavigator,
  [screens.Empty]: {
    screen: Empty,
    navigationOptions: {
      tabBarIcon: <CreatePostButton />,
      tabBarLabel: <View />,
    },
  },
  [screens.InboxTab]: InboxNavigator,
  [screens.ProfileTab]: ProfileNavigator,
};

export default createBottomTabNavigator(routes, {
  tabBarComponent: CustomTabBarBottom,
  initialRouteName: screens.BrowseTab,
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: colors.gray,
    labelPosition: 'below-icon',
    style: {
      borderTopColor: 'transparent',
    },
  },
});
