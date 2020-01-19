import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import MainNavigator from './MainNavigator';
import createPostNavigator from './createPostNavigator';
import filterNavigator from './filterNavigator';
import LocationFilterScreen from '../screens/LocationFilterScreen/LocationFilterScreen';
import ChatView from '../screens/Inbox/components/ChatView/ChatView';

const routes = {
  [screens.Main]: MainNavigator,
  [screens.CreatePost]: createPostNavigator,
  [screens.Filters]: filterNavigator,
  [screens.LocationFilter]: LocationFilterScreen,
  [screens.Chat]: ChatView,
};

export default createStackNavigator(routes, {
  initialRouteName: screens.Main,
  headerMode: 'none',
  mode: 'modal',
});
