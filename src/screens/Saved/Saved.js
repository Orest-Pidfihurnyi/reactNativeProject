import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/createStore';
import s from './styles';
import noItems from '../../../assets/noItems.png';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import SearchInput from '../../components/SearchInput/SearchInput';
import ProductsList from '../../components/ProductsList/ProductsList';

function SavedScreen() {
  const store = useStore();
  useEffect(() => {
    store.savedProducts.fetchSaved.run();
  }, [store.savedProducts.items.length]);

  return (
    <View style={s.allScreenView}>
      <CustomHeader>
        <SearchInput />
      </CustomHeader>
      <View style={s.container}>
        {store.savedProducts.items.length ? (
          <ProductsList
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
