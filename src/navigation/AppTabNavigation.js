import { createBottomTabNavigator } from 'react-navigation-tabs';
import BrowseNavigator from '../navigation/BrowseNavigator';
import InboxNavigator from '../navigation/InboxNavigator';
import SavedNavigator from '../navigation/SavedNavigator';
import ProfileNavigator from '../navigation/ProfileNavigator';
import screens from './screens';
import globalStyles from '../styles/colors';

const routes = {
  [screens.BrowseTab]: BrowseNavigator,
  [screens.SavedTab]: SavedNavigator,
  [screens.InboxTab]: InboxNavigator,
  [screens.ProfileTab]: ProfileNavigator,
};

export default createBottomTabNavigator(routes, {
  initialRouteName: screens.BrowseTab,
  tabBarOptions: {
    activeTintColor: globalStyles.primary,
    inactiveTintColor: globalStyles.gray,
    labelPosition: 'below-icon',
  },
});
