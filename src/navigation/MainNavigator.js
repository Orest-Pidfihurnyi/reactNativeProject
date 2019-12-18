import { createStackNavigator } from 'react-navigation-stack';
import AuthNavigator from './AuthNavigator';
import screens from './screens';
import AppTabNavigation from './AppTabNavigation';

const routes = {
  [screens.Auth]: AuthNavigator,
  [screens.MainApp]: AppTabNavigation,
};

export default createStackNavigator(routes, {
  initialRouteName: screens.Auth,
  headerMode: 'none',
  mode: 'modal',
});
