import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ProductItem from '../../components/ProductItem/ProductItem';
import s from './styles';
import styles from '../../styles/styles';
import { useStore } from '../../stores/createStore';
import colors from '../../styles/colors';

function BrowseScreen() {
  const store = useStore();
  console.log(store.latestProducts);

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, []);

  return (
    <View style={s.container}>
      {store.latestProducts.fetchLatest.isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          data={store.latestProducts.items}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={s.flatList}
        />
      )}
    </View>
  );
}

BrowseScreen.navigationOptions = () => ({
  title: 'Browse',
  headerStyle: styles.header,
});

BrowseScreen.propTypes = {};

export default observer(BrowseScreen);
