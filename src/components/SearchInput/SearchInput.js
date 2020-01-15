import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import Touchable from '../Touchable/Touchable';
import s from '../HeaderSearchInput/styles';
import colors from '../../styles/colors';

function SearchInput({ inputValue, setInputValue }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePress = (value) => {
    setInputValue(value);
  };

  return (
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
          onSubmitEditing={() => setInputValue('')}
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
  );
}

SearchInput.propTypes = {
  inputValue: T.string,
  setInputValue: T.func,
};

export default SearchInput;
