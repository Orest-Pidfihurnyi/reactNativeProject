import { NavigationActions } from 'react-navigation';
import screens from '../navigation/screens';

class NavigationService {
  constructor() {
    this.navigation = null;
  }

  init(navigation) {
    if (this.navigation) {
      return;
    }

    this.navigation = navigation;
  }

  navigate(routeName) {
    this.navigation.dispatch(
      NavigationActions.navigate({
        routeName,
      }),
    );
  }

  navigateToHome() {
    this.navigate(screens.Home);
  }

  navigateToRegistration() {
    this.navigate(screens.Register);
  }

  navigateToLogin() {
    this.navigate(screens.Login);
  }

  navigateToProfile() {
    this.navigate(screens.Profile);
  }

  navigateToApp() {
    this.navigate(screens.MainApp);
  }

  navigateToAuth() {
    this.navigate(screens.Auth);
  }

  navigateToCreatePost() {
    this.navigate(screens.CreatePost);
  }

  navigateToFilter() {
    this.navigate(screens.Filters);
  }

  onGoBack() {
    this.navigation.dispatch(NavigationActions.back());
  }
}

export default new NavigationService();
