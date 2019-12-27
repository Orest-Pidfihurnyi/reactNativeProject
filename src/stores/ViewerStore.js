import { types } from 'mobx-state-tree';
import { UserModel } from './UserModel';

export const ViewerStore = types
  .model('ViewerStore', {
    user: types.maybe(UserModel),
    // user: types.maybe(reference(UserModel)),
  })
  .actions((store) => ({
    setViewer(user) {
      store.user = user;
    },
  }));
