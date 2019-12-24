import { createStackNavigator } from 'react-navigation-stack';
import CreatePost from '../screens/CreatePost/CreatePost';
import screens from './screens';

const routes = {
  [screens.createPost]: CreatePost,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  headerMode: 'float',
});
