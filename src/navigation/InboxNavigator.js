import React from 'react';
import T from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import InboxScreen from '../screens/Inbox/Inbox';

const routes = {
  [screens.Inbox]: InboxScreen,
};

const InboxNavigator = createStackNavigator(routes, {
  navigationOptions: {
    tabBarLabel: 'Inbox',
    tabBarIcon: ({ tintColor }) => {
      return (
        <MaterialIcons name="inbox" size={20} color={tintColor} />
      );
    },
  },
  headerLayoutPreset: 'center',
});

InboxNavigator.propTypes = {
  tintColor: T.string,
};

export default InboxNavigator;
