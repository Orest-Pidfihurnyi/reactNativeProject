import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ProductItem from '../../components/ProductItem/ProductItem';
import s from './styles';
import { useStore } from '../../stores/createStore';
import colors from '../../styles/colors';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeaderSearchInput from '../../components/HeaderSearchInput/HeaderSearchInput';

function BrowseScreen() {
  const store = useStore();

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, []);

  return (
    <View style={s.container}>
      {store.latestProducts.fetchLatest.isLoading ? (
        <View style={s.activityIndicator}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
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
  header: (
    <CustomHeader>
      <HeaderSearchInput />
    </CustomHeader>
  ),
  headerStyle: { marginLeft: 0 },
});

BrowseScreen.propTypes = {};

export default observer(BrowseScreen);
