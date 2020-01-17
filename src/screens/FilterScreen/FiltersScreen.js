import React from 'react';
import { observer } from 'mobx-react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, ScrollView, Alert } from 'react-native';
import s from './styles';
import Touchable from '../../components/Touchable/Touchable';
import { NavigationService } from '../../services';
import colors from '../../styles/colors';
import { useStore } from '../../stores/createStore';
import SegmentControlSortBy from './components/SegmentControlSortBy/SegmentControlSortBy';
import PriceRangeInput from './components/PriceRangeInput/PriceRangeInput';
import SegmentedControl from '../../components/SegmentedControl/SegmentedControl';
import HeaderBackIcon from '../../components/headerBackIcon/HeaderBackIcon';
import SearchInput from '../../components/SearchInput/SearchInput';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import screens from '../../navigation/screens';

function FilterScreen() {
  const store = useStore();

  function handleDonePress() {
    if (
      !store.filteredProductStore.keywords &&
      !store.productsLocationStore.locationForSearchWIthFilter
    ) {
      Alert.alert(
        'Enter some keywords or choose location at least',
        'Press OK to close alert window',
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      );
    } else {
      store.filteredProductStore.fetchWithFilters.run();
      NavigationService.navigateToBrowse();
    }
  }

  return (
    <ScrollView style={s.scrollView}>
      <CustomHeader>
        <HeaderBackIcon
          style={s.headerLeft}
          onPress={() => NavigationService.onGoBack()}
        >
          <Ionicons
            name="ios-close"
            size={46}
            color={colors.primary}
          />
        </HeaderBackIcon>
        <Text style={s.headerTitle}>Filter</Text>
        <Touchable onPress={handleDonePress}>
          <Text style={s.doneButtonText}>Done</Text>
        </Touchable>
      </CustomHeader>
      <View style={s.container}>
        <View style={s.filterContainer}>
          <SearchInput
            inputValue={store.filteredProductStore.keywords}
            setInputValue={store.filteredProductStore.setKeywords}
          />
          <Touchable
            style={s.locationContainer}
            onPress={() =>
              NavigationService.navigate(screens.LocationFilter, {
                navigatedFrom: 'FiltersScreen',
              })
            }
          >
            <View style={s.locationLeft}>
              <MaterialIcons
                name="location-on"
                size={32}
                color={colors.primary}
              />
              <Text style={s.locationText}>
                {store.productsLocationStore
                  .locationForSearchWIthFilter || 'Location'}
              </Text>
            </View>

            <View style={s.locationRight}>
              <Ionicons
                name="ios-arrow-forward"
                size={32}
                color={colors.primary}
              />
            </View>
          </Touchable>
          <SegmentedControl
            isFree={store.filteredProductStore.isFree}
            setIsFree={store.filteredProductStore.setIsFree}
          />
          <View style={s.priceRangeContainer}>
            {!store.filteredProductStore.isFree && (
              <PriceRangeInput
                value={store.filteredProductStore.priceFrom}
                onChangeText={(val) =>
                  store.filteredProductStore.setPriceFrom(val)
                }
                isFrom
              />
            )}
            {!store.filteredProductStore.isFree && (
              <PriceRangeInput
                value={store.filteredProductStore.priceTo}
                onChangeText={(val) =>
                  store.filteredProductStore.setPriceTo(val)
                }
              />
            )}
          </View>
          <SegmentControlSortBy
            sortBy={store.filteredProductStore.sortBy}
            setSortBy={store.filteredProductStore.setSortBy}
            isFree={store.filteredProductStore.isFree}
          />
        </View>
      </View>
    </ScrollView>
  );
}

FilterScreen.navigationOptions = () => ({
  header: null,
});

FilterScreen.propTypes = {};

export default observer(FilterScreen);
