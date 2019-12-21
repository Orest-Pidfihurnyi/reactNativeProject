import { ProductModel } from './ProductModel';
import { asyncModel, createCollection } from '../utils';
import { useStore } from '../createStore';
import * as Api from '../../api/Api';

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
});

export function useProductCollection() {
  const store = useStore();
  return store.entities.products;
}

function getProduct(id) {
  return async function getProductFlow(flow, store) {
    const res = await Api.Products.getById(id);
    store.add(res.data.id, res.data);
  };
}
