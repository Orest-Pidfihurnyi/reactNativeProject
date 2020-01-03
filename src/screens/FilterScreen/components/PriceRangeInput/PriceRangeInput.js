import React, { useState } from 'react';
import T from 'prop-types';
import { TextInput, View, Text } from 'react-native';
import s from './styles';

function PriceRangeInput({ value, onChangeText, isFrom, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[s.inputContainer, isFocused && s.focusedInput]}>
      <Text style={(s.left, s.simpleText)}>
        {isFrom ? 'From' : 'To'}
      </Text>
      <TextInput
        value={value}
        style={s.textInput}
        onChangeText={onChangeText}
        keyboardType="numeric"
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <Text style={(s.right, s.simpleText)}>uah</Text>
    </View>
  );
}

PriceRangeInput.propTypes = {
  placeholder: T.string,
  value: T.string,
  onChangeText: T.func,
  isFrom: T.bool,
};

export default PriceRangeInput;
