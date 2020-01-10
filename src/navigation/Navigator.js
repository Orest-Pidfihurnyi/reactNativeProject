import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import MainNavigator from './MainNavigator';
import createPostNavigator from './createPostNavigator';
import filterNavigator from './filterNavigator';
import LocationFilterScreen from '../screens/LocationFilterScreen/LocationFilterScreen';

const routes = {
  [screens.Main]: MainNavigator,
  [screens.CreatePost]: createPostNavigator,
  [screens.Filters]: filterNavigator,
  [screens.LocationFilter]: LocationFilterScreen,
};

export default createStackNavigator(routes, {
  initialRouteName: screens.Main,
  headerMode: 'none',
  mode: 'modal',
});
