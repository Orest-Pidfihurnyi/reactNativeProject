import { types } from 'mobx-state-tree';
import Api from '../../api';
// import { ProductModel } from './ProductModel';
import { asyncModel } from '../utils';

// export const OwnProductsStore = types
//   .model('OwnProductsStore', {
//     items: types.array(
//       types.reference(types.late(() => ProductModel)),
//     ),
//     fetchOwnProducts: asyncModel(fetchOwnProducts),
//   })
//   .actions((store) => ({
//     setItems(items) {
//       store.items = items;
//     },
//   }));

// function fetchOwnProducts() {
//   return async function FetchOwnProductsFlow(flow, store, Root) {
//     const res = await Api.Products.fetchOwnProducts();

//     res.data.forEach((item) => {
//       Root.entities.ownProducts.add(item.id, item);
//     });

//     store.setItems(res.data.map((item) => item.id));
//   };
// }

export const OwnProducts = types.model('OwnProductStore', {
  // items: types.array(types.reference(types.late(() => ProductModel))),

  fetch: asyncModel(fetchOwnProducts),
});

function fetchOwnProducts() {
  return async function FetchOwnProductsFlow(flow, store, Root) {
    const res = await Api.Products.fetchOwnProducts();
    res.data.forEach((item) => {
      Root.entities.ownProducts.add(item.id, item);
    });
    store.setItems(res.data.map((item) => item.id));
  };
}
