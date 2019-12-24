import React, { useState } from 'react';
import T from 'prop-types';
import { TextInput, View, Text } from 'react-native';
import s from './styles';

function CustomTextInput({
  rightText,
  placeholder,
  height,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        s.inputContainer,
        isFocused && s.focusedInput,
        height && height,
      ]}
    >
      {rightText && <Text style={s.rightText}>{rightText}</Text>}

      <TextInput
        {...props}
        placeholder={placeholder}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

CustomTextInput.propTypes = {
  rightText: T.string,
  placeholder: T.string,
  height: T.object,
};

export default CustomTextInput;
