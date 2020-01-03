import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import s from './styles';
import { useStore } from '../../stores/createStore';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeaderSearchInput from '../../components/HeaderSearchInput/HeaderSearchInput';
import ProductList from '../../components/ProductsList/ProductsList';

function BrowseScreen() {
  const store = useStore();

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, []);

  return (
    <View style={s.AllScreenView}>
      <CustomHeader>
        <HeaderSearchInput />
      </CustomHeader>
      <View style={s.container}>
        <ProductList
          store={store.latestProducts}
          isLoading={store.latestProducts.fetchLatest.isLoading}
          numColumns={2}
          columnWrapperStyle={s.flatList}
          onEndReached={() => store.latestProducts.fetchMore.run()}
          onEndReachedThreshold={0.3}
        />
      </View>
    </View>
  );
}

BrowseScreen.navigationOptions = () => ({
  header: null,
});

BrowseScreen.propTypes = {};

export default observer(BrowseScreen);
