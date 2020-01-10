import { createStackNavigator } from 'react-navigation-stack';
import FiltersScreen from '../screens/FilterScreen/FiltersScreen';
import screens from './screens';

const routes = {
  [screens.Filters]: FiltersScreen,
};

export default createStackNavigator(routes, {});
