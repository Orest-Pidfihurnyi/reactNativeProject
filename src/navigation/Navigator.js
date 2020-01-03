import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import MainNavigator from './MainNavigator';
import createPostNavigator from './createPostNavigator';
import filterNavigator from './filterNavigator';

const routes = {
  [screens.Main]: MainNavigator,
  [screens.CreatePost]: createPostNavigator,
  [screens.Filters]: filterNavigator,
};

export default createStackNavigator(routes, {
  initialRouteName: screens.Main,
  headerMode: 'none',
  mode: 'modal',
});
