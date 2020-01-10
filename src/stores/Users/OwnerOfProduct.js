import { types } from 'mobx-state-tree';

export const OwnerOfProduct = types
  .model('OwnerOfProduct', {
    id: types.identifierNumber,
    fullName: types.maybeNull(types.string),
    location: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
    phone: types.maybeNull(types.string),
    createdAt: types.maybeNull(types.string),
    updatedAt: types.maybeNull(types.string),
  })
  .views((store) => ({
    get initials() {
      if (store.fullName) {
        const [firstName, lastName] = store.fullName.split(' ');
        if (lastName) {
          return `${firstName[0]} ${lastName[0]}`;
        }
        return `${firstName[0]}`;
      }
      return null;
    },
    get firstName() {
      if (store.fullName) {
        const [firstName] = store.fullName.split(' ');
        return `${firstName}`;
      }
      return null;
    },
  }));
