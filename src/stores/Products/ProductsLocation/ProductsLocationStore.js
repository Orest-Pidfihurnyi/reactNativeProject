import { types } from 'mobx-state-tree';

export const ProductsLocationStore = types
  .model('ProductsLocationStore', {
    locationForCreatingPost: types.maybeNull(types.string),
  })
  .actions((store) => ({
    setLocation(location) {
      store.locationForCreatingPost = location;
    },
  }));
