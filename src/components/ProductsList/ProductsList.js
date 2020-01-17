import React from 'react';
import { observer } from 'mobx-react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import s from './styles';

function ProductList({ store, isLoading, fetchMethod, ...props }) {
  return store.items.length ? (
    <FlatList
      data={store.items}
      showsVerticalScrollIndicator={false}
      ListFooterComponentStyle={s.productListContainer}
      onRefresh={() => fetchMethod()}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      refreshing={isLoading}
      {...props}
    />
  ) : null;
}

ProductList.propTypes = {
  store: T.object,
  isLoading: T.bool,
  fetchMethod: T.func,
};

export default observer(ProductList);
