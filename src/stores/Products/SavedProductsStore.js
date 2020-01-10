import { types } from 'mobx-state-tree';
import Api from 'src/api';
import { ProductModel } from './ProductModel';
import { asyncModel, safeReference } from '../utils';

export const SavedProductsStore = types
  .model('SavedProductsStore', {
    items: types.array(safeReference(ProductModel)),
    fetchSaved: asyncModel(fetchSaved),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items.slice();
    },
    removeSavedItem(productId) {
      store.setItems(
        store.items.filter((item) => item.id !== productId),
      );
    },

    addSavedItem(productId) {
      store.setItems([...store.items, productId]);
    },

    async addToSaved(productId) {
      try {
        const res = await Api.Products.addProductToSaved(productId);

        if (res.data.success) {
          store.addSavedItem(productId);
        }
      } catch (err) {
        console.log('addToSaved error :', err);
      }
    },

    async removeFromSaved(productId) {
      try {
        const res = await Api.Products.deleteProductFromSaved(
          productId,
        );

        if (res.data.success) {
          store.removeSavedItem(productId);
        }
      } catch (err) {
        console.log('removeFromSaved error:', err);
      }
    },
  }));

function fetchSaved() {
  return async function fetchSavedFlow(flow, store) {
    if (store.fetchSaved.isLoading || flow.isLoading) {
      return;
    }
    try {
      const res = await Api.Products.fetchSaved();

      const ids = res.data.map((item) => item.id);

      store.setItems(ids);
    } catch (err) {
      console.log('fetchSavedFlowError :', err);
    }
  };
}
