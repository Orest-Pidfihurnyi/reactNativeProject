import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/createStore';
import s from './styles';
import FilterInput from './FilterInput/FilterInput';

function SelectedFiltersView() {
  const store = useStore();

  const [isChoosingValue, setIsChoosingValue] = useState(false);

  return (
    <View
      style={[s.selectedFiltersView, isChoosingValue && s.biggerSize]}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.selectedFiltersScrollView}
        horizontal
      >
        <FilterInput
          isKeywords
          value={store.filteredProductStore.keywords}
        />
        <FilterInput
          isLocationInput
          setIsChoosingValue={setIsChoosingValue}
          value={
            store.productsLocationStore.locationForSearchWIthFilter
          }
        />
        <FilterInput
          isPriceRange
          from={store.filteredProductStore.priceFrom}
          to={store.filteredProductStore.priceTo}
        />
        <FilterInput
          isSortBy
          setIsChoosingValue={setIsChoosingValue}
          value={store.filteredProductStore.sortBy}
        />
      </ScrollView>
    </View>
  );
}

export default observer(SelectedFiltersView);
