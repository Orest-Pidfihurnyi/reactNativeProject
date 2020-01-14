import { types } from 'mobx-state-tree';
import Api from '../../api';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';
import { ProductCollection } from '../schema';

export const OwnProducts = types
  .model('OwnProductStore', {
    items: types.array(
      types.reference(types.late(() => ProductModel)),
    ),

    fetchOwnProducts: asyncModel(fetchOwnProducts),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
  }));

function fetchOwnProducts(id) {
  return async function FetchOwnProductsFlow(flow, store) {
    const res = await Api.Products.fetchOwnProducts(id);

    const result = flow.merge(res.data.list, ProductCollection);
    store.setItems(result);
  };
}
