import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import s from './styles';
import { useStore } from '../../stores/createStore';
import FooterList from '../../components/FooterList/FooterList';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeaderSearchInput from '../../components/HeaderSearchInput/HeaderSearchInput';
import ProductList from '../../components/ProductsList/ProductsList';
import AbsoluteSearchView from '../../components/AbsoluteSearchView/AbsoluteSearchView';
import SelectedFiltersView from './SelectedFiltersView/SelectedFiltersView';

function BrowseScreen() {
  const store = useStore();

  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, []);

  useEffect(() => {
    if (store.filteredProductStore.showFilteredProducts) {
      store.filteredProductStore.fetchWithFilters.run(
        store.filteredProductStore.keywords,
        store.filteredProductStore.priceFrom,
        store.filteredProductStore.priceTo,
        store.productsLocationStore.locationForSearchWIthFilter,
      );
    }
  }, [
    store.filteredProductStore.keywords,
    store.filteredProductStore.priceFrom,
    store.filteredProductStore.priceTo,
    store.productsLocationStore.locationForSearchWIthFilter,
  ]);

  return (
    <View style={s.AllScreenView}>
      <CustomHeader>
        <HeaderSearchInput
          inputValue={searchStr}
          setInputValue={setSearchStr}
          onSubmitEditing={() => setSearchStr('')}
        />
      </CustomHeader>

      <View style={s.container}>
        {store.filteredProductStore.showFilteredProducts && (
          <SelectedFiltersView />
        )}
        {!!searchStr.length && (
          <AbsoluteSearchView
            items={store.latestProducts.searchProducts(searchStr)}
            setSearchStr={setSearchStr}
          />
        )}
        {store.filteredProductStore.showFilteredProducts ? (
          <ProductList
            fetchMethod={() =>
              store.filteredProductStore.fetchWithFilters.run()
            }
            columnWrapperStyle={s.flatList}
            store={store.filteredProductStore.getSorted()}
            isLoading={
              store.filteredProductStore.fetchWithFilters.isLoading
            }
            numColumns={2}
          />
        ) : (
          <ProductList
            fetchMethod={() => store.latestProducts.fetchLatest.run()}
            store={store.latestProducts}
            isLoading={store.latestProducts.fetchLatest.isLoading}
            numColumns={2}
            columnWrapperStyle={s.flatList}
            onEndReached={() => store.latestProducts.fetchMore.run()}
            onEndReachedThreshold={0.3}
            ListFooterComponent={() => <FooterList />}
          />
        )}
      </View>
    </View>
  );
}

BrowseScreen.navigationOptions = () => ({
  header: null,
});

export default observer(BrowseScreen);
