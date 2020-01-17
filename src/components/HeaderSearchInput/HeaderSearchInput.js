import React, { useState } from 'react';
import { TextInput, View, Text, Keyboard } from 'react-native';
import T from 'prop-types';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { useStore } from '../../stores/createStore';
import s from './styles';
import Touchable from '../Touchable/Touchable';
import NavigationService from '../../services/NavigationService';

function HeaderSearchInput({
  inputValue,
  setInputValue,
  onSubmitEditing,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const store = useStore();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePress = (value) => {
    setInputValue(value);
  };

  const handleCancelPress = () => {
    setInputValue('');
    store.filteredProductStore.setShowFilteredProducts(false);
    store.filteredProductStore.setKeywords(null);
    store.filteredProductStore.setPriceFrom(null);
    store.filteredProductStore.setPriceTo(null);
    store.filteredProductStore.setSortBy('newest');
    store.filteredProductStore.setIsFree(false);
    store.productsLocationStore.setLocationForSearchWithFilter(null);
  };

  return (
    <View style={s.headerContainer}>
      <View style={s.inputContainer}>
        <View style={[s.input, isFocused && s.focusedInput]}>
          <View style={s.inputLeft}>
            <View style={s.searchIcon}>
              <Ionicons
                name="ios-search"
                size={20}
                color={isFocused ? colors.primary : colors.gray}
              />
            </View>
            <TextInput
              style={s.textInput}
              placeholder="Search"
              autoCapitalize="none"
              value={inputValue}
              onChangeText={handlePress}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onSubmitEditing={onSubmitEditing || Keyboard.dismiss}
            />
          </View>
          <View style={s.rightItem}>
            {!!inputValue && (
              <Touchable onPress={() => setInputValue('')}>
                <Ionicons
                  name="ios-close-circle"
                  size={20}
                  color={colors.gray}
                />
              </Touchable>
            )}
          </View>
        </View>
      </View>
      <View style={s.headerRight}>
        {!inputValue &&
        !store.filteredProductStore.showFilteredProducts ? (
          <Touchable
            onPress={() => NavigationService.navigateToFilter()}
          >
            <FontAwesome
              name="filter"
              size={24}
              color={colors.primary}
            />
          </Touchable>
        ) : (
          <Touchable onPress={handleCancelPress}>
            <Text style={s.rightItemText}>Cancel</Text>
          </Touchable>
        )}
      </View>
    </View>
  );
}

HeaderSearchInput.propTypes = {
  inputValue: T.string,
  setInputValue: T.func,
  onSubmitEditing: T.func,
};

export default HeaderSearchInput;
