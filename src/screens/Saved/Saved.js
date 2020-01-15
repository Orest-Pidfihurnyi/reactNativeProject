import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/createStore';
import s from './styles';
import noItems from '../../../assets/noItems.png';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import SearchInput from '../../components/SearchInput/SearchInput';
import ProductsList from '../../components/ProductsList/ProductsList';
import AbsoluteSearchView from '../../components/AbsoluteSearchView/AbsoluteSearchView';

function SavedScreen() {
  const store = useStore();
  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    store.savedProducts.fetchSaved.run();
  }, []);

  return (
    <View style={s.allScreenView}>
      <CustomHeader>
        <SearchInput
          inputValue={searchStr}
          setInputValue={setSearchStr}
        />
      </CustomHeader>
      <View style={s.container}>
        {!!searchStr.length && (
          <AbsoluteSearchView
            items={store.savedProducts.searchProducts(searchStr)}
            setSearchStr={setSearchStr}
          />
        )}
        {store.savedProducts.items.length ? (
          <ProductsList
            fetchMethod={() => store.savedProducts.fetchSaved.run()}
            isLoading={store.savedProducts.fetchSaved.isLoading}
            store={store.savedProducts}
            numColumns={2}
            columnWrapperStyle={s.flatList}
          />
        ) : (
          <View style={s.container}>
            <View style={s.noSavedProductsView}>
              <Image source={noItems} style={s.noItemsImage} />
              <Text style={s.noItemsText}>
                You have no saved products
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

SavedScreen.navigationOptions = () => ({
  header: null,
});

SavedScreen.propTypes = {};

export default observer(SavedScreen);
