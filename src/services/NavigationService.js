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

  navigate(routeName, params) {
    this.navigation.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }

  navigateToHome() {
    this.navigate(screens.Home);
  }

  navigateToRegistration() {
    this.navigate(screens.Register);
  }

  navigateToBrowse(params) {
    this.navigate(screens.BrowseTab, params);
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

  navigateToLocationFilterScreen() {
    this.navigate(screens.LocationFilter);
  }

  onGoBack() {
    this.navigation.dispatch(NavigationActions.back());
  }
}

export default new NavigationService();
