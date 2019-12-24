import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import MainNavigator from './MainNavigator';

const routes = {
  [screens.Main]: MainNavigator,
};

export default createStackNavigator(routes, {
  initialRouteName: screens.Main,
  headerMode: 'none',
  mode: 'modal',
});
