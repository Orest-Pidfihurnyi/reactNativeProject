import { types } from 'mobx-state-tree';
import Api from 'src/api';
import { ProductModel } from './ProductModel';
import { asyncModel, safeReference } from '../utils';
import { LatestProductCollection } from '../schema';

export const FilteredProductStore = types
  .model('LatestProductsStore', {
    items: types.array(safeReference(ProductModel)),
    showFilteredProducts: false,
    keywords: types.maybeNull(types.string),
    priceFrom: types.maybeNull(types.string),
    priceTo: types.maybeNull(types.string),
    isFree: false,
    sortBy: types.optional(types.string, 'newest'),
    sortingTypes: types.optional(types.array(types.string), [
      'lowest',
      'highest',
      'newest',
    ]),
    fetchWithFilters: asyncModel(fetchWithFilters, false),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },

    setKeywords(keyword) {
      store.keywords = keyword;
    },

    setIsFree(booleanVal) {
      store.isFree = booleanVal;
    },

    setShowFilteredProducts(booleanVal) {
      store.showFilteredProducts = booleanVal;
    },

    setPriceFrom(priceFrom) {
      store.priceFrom = priceFrom;
    },

    setPriceTo(priceTo) {
      store.priceTo = priceTo;
    },

    setSortBy(sortBy) {
      store.sortBy = sortBy;
    },

    append(items) {
      if (!Array.isArray(items)) {
        items = [items];
      }

      store.items.push(...items);
    },
  }))
  .views((store) => ({
    getSorted() {
      if (store.sortBy === 'lowest' && store.items.length) {
        return {
          items: store.items.sort((a, b) =>
            a.price > b.price ? 1 : -1,
          ),
        };
      } else if (store.sortBy === 'highest' && store.items.length) {
        return {
          items: store.items.sort((a, b) => b.price - a.price),
        };
      }
      return { items: store.items };
    },
  }));

function fetchWithFilters() {
  return async function fetchWithFiltersFlow(flow, store, Root) {
    try {
      const res = await Api.Products.searchByFilter(
        store.keywords,
        Root.productsLocationStore.locationForSearchWIthFilter,
        store.priceFrom,
        store.priceTo,
        store.isFree,
      );

      console.log(res);

      if (res.status === 200) {
        store.setShowFilteredProducts(true);
      } else {
        store.setShowFilteredProducts(false);
      }

      const results = flow.merge(res.data, LatestProductCollection);

      store.setItems(results);
    } catch (err) {
      store.setShowFilteredProducts(false);
      console.log('filteredProductStore fetching with filters', err);
    }
  };
}
