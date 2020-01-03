import { types } from 'mobx-state-tree';
import Api from 'src/api';
import { AsyncStorage } from 'react-native';
import { AuthStore } from './Auth/AuthStore';
import { ViewerStore } from './ViewerStore';
import NavigationService from '../services/NavigationService';
import { LatestProductsStore } from './Products/LatestProductsStore';
import { EntitiesStore } from './EntitiesStore';
import { SavedProductsStore } from './Products/SavedProductsStore';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
    savedProducts: types.optional(SavedProductsStore, {}),

    entities: types.optional(EntitiesStore, {}),
  })
  .actions((store) => ({
    async bootstrap() {
      try {
        const token = await AsyncStorage.getItem('___token');

        if (!token) {
          NavigationService.navigateToAuth();
          return;
        }

        await Api.Auth.setToken(token);

        const res = await Api.Account.getUser();

        store.viewer.setViewer(res.data);
        store.auth.setIsLoggedIn(true);
        NavigationService.navigateToApp();
      } catch (err) {
        NavigationService.navigateToAuth();
        console.log('from RootStore.js ', err);
      }
    },
  }));
