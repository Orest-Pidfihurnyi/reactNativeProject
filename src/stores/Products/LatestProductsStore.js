import { types } from 'mobx-state-tree';
import Api from 'src/api';
import { ProductModel } from './ProductModel';
import { asyncModel } from '../utils';

export const LatestProductsStore = types
  .model('LatestProductsStore', {
    items: types.array(types.reference(ProductModel)),
    fetchLatest: asyncModel(fetchLatest),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
  }));

function fetchLatest() {
  return async function fetchLatestFlow(flow, store, Root) {
    const res = await Api.Products.fetchLatest();

    res.data.forEach((item) => {
      Root.entities.products.add(item.id, item);
    });

    store.setItems(res.data.map((item) => item.id));
  };
}
