import React from 'react';
import { observer } from 'mobx-react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import T from 'prop-types';
import colors from '../../styles/colors';
import styles from '../../styles/styles';
import FooterList from '../FooterList/FooterList';
import ProductItem from '../ProductItem/ProductItem';

function ProductList({ store, isLoading, ...props }) {
  return store.items.length && !isLoading ? (
    <FlatList
      data={store.items}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={() => (
        <FooterList
          fetch={
            store.fetchMore ? store.fetchMore.isLoading : isLoading
          }
        />
      )}
      {...props}
    />
  ) : (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

ProductList.propTypes = {
  store: T.object,
  isLoading: T.bool,
};

export default observer(ProductList);
