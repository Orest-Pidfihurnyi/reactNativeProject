import { types } from 'mobx-state-tree';
import { UserModel } from '../UserModel';
import { safeReference } from '../utils';

export const ProductModel = types
  .model('ProductModel', {
    id: types.identifierNumber,
    ownerId: types.number,
    title: types.string,
    description: types.maybeNull(types.string),
    photos: types.maybeNull(types.array(types.string)),
    location: types.string,
    price: types.number,
    saved: false,
    createdAt: types.string,
    updatedAt: types.string,
    chatId: types.maybeNull(types.number),
    owner: types.maybe(safeReference(UserModel)),
  })
  .actions((store) => ({
    setSaved() {
      store.saved = !store.saved;
    },
  }));
