import { createStackNavigator } from 'react-navigation-stack';
import RegisterScreen from '../screens/Auth/Register/Register';
import LoginScreen from '../screens/Auth/Login/Login';
import screens from './screens';

const routes = {
  [screens.Login]: LoginScreen,
  [screens.Register]: RegisterScreen,
};

export default createStackNavigator(routes, {
  initialRouteName: screens.LoginScreen,
  headerLayoutPreset: 'center',
});
