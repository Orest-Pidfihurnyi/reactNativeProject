import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { observer } from 'mobx-react';
import T from 'prop-types';
import s from './styles';
import colors from '../../../../styles/colors';
import { useStore } from '../../../../stores/createStore';
import Touchable from '../../../../components/Touchable/Touchable';
import { ukrainianRegions } from '../../../../ukrainian_regions';
import Dropdown from '../../../../components/AbsoluteSearchView/components/Dropdown/Dropdown';

function FilterInput({
  isLocationInput,
  isPriceRange,
  isKeywords,
  isSortBy,
  value,
  from,
  to,
  setIsChoosingValue,
  ...props
}) {
  const store = useStore();
  const [isDropdown, setIsDropdown] = useState(false);

  function handleDropDown() {
    setIsChoosingValue(true);
    setIsDropdown(true);
  }

  function handleChooseLocation(item) {
    store.productsLocationStore.setLocationForSearchWithFilter(item);
    setIsDropdown(false);
    setIsChoosingValue(false);
  }

  function handleChooseSortBy(item) {
    store.filteredProductStore.setSortBy(item);
    setIsDropdown(false);
    setIsChoosingValue(false);
  }

  return (
    <View
      style={[s.inputContainer, isLocationInput && s.locationInput]}
    >
      {isLocationInput && (
        <MaterialIcons
          name="location-on"
          size={16}
          color={colors.primary}
        />
      )}
      {isLocationInput && (
        <>
          <Touchable onPress={handleDropDown}>
            <Text style={s.inputStyles}>{value}</Text>
          </Touchable>
          {isDropdown && isLocationInput && (
            <Dropdown
              items={ukrainianRegions}
              onChoose={handleChooseLocation}
            />
          )}
        </>
      )}
      {isKeywords && (
        <TextInput
          placeholder="Keywords"
          style={s.inputStyles}
          onChangeText={(val) =>
            store.filteredProductStore.setKeywords(val)
          }
          value={value || ''}
          {...props}
        />
      )}
      {isPriceRange && (
        <View style={s.priceRange}>
          <TextInput
            keyboardType="numeric"
            placeholder="From"
            style={[s.inputStyles, s.priceLeft]}
            value={from || ''}
            onChangeText={(val) =>
              store.filteredProductStore.setPriceFrom(val)
            }
            {...props}
          />
          <Text>-</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="To"
            style={[s.inputStyles, s.priceRight]}
            value={to || ''}
            onChangeText={(val) =>
              store.filteredProductStore.setPriceTo(val)
            }
            {...props}
          />
        </View>
      )}
      {isSortBy && (
        <>
          <Touchable onPress={handleDropDown} style={s.sortBy}>
            <Text style={s.sortByLeft}>Sort By</Text>
            <Text style={[s.inputStyles, s.sortByRight]}>
              {value}
            </Text>
          </Touchable>
          {isDropdown && isSortBy && (
            <Dropdown
              items={store.filteredProductStore.sortingTypes}
              onChoose={handleChooseSortBy}
            />
          )}
        </>
      )}
      {(isLocationInput || isSortBy) && value && (
        <Ionicons
          style={s.rightButton}
          name="ios-arrow-down"
          size={16}
          color={colors.gray}
        />
      )}
    </View>
  );
}

FilterInput.propTypes = {
  setIsChoosingValue: T.func,
  isLocationInput: T.bool,
  isPriceRange: T.bool,
  isKeywords: T.bool,
  isSortBy: T.bool,
  from: T.any,
  value: T.any,
  to: T.any,
};

export default observer(FilterInput);
