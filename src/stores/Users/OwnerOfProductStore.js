import { types } from 'mobx-state-tree';
import { OwnerOfProduct } from './OwnerOfProduct';
import { asyncModel } from '../utils';
import Api from '../../api';

export const OwnerOfProductStore = types
  .model('OwnerOfProduct', {
    fetchOwnerById: asyncModel(fetchOwnerFlow),
    ownerOfProduct: types.maybe(OwnerOfProduct),
  })
  .actions((store) => ({
    setOwnerOfProduct(ownerId) {
      store.ownerOfProduct = ownerId;
    },
  }));

function fetchOwnerFlow(id) {
  return async function fetchOwnerAsync(flow, store) {
    try {
      const res = await Api.getOwnerById(id);

      store.setOwnerOfProduct(res.data);
    } catch (err) {
      console.log('error in fetch owner:', err);
    }
  };
}
