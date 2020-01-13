import React, { useState } from 'react';
import T from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, TextInput } from 'react-native';
import s from './styles';
import colors from '../../../../styles/colors';

const AuthInput = ({ label, secured, error, isLogin, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [wasChecked, setWasChecked] = useState(false);

  function handleBlur() {
    setIsFocused(false);
    setWasChecked(true);
  }

  return (
    <View
      style={[
        s.emailContainer,
        isFocused && s.focusedInput,
        error && wasChecked && isTouched && s.errorInput,
      ]}
    >
      {error && wasChecked && isTouched && (
        <Text style={s.errorIcon}>
          <MaterialIcons name="error" color={colors.red} size={16} />
        </Text>
      )}
      <View style={[s.labelContainer]}>
        <Text
          style={[
            s.label,
            error && wasChecked && isTouched && s.labelError,
          ]}
        >
          {label}
        </Text>
        <View
          style={[
            s.labelBackgroundLine,
            isTouched &&
              wasChecked &&
              error &&
              s.labelBackgroundLineTouchedPlusError,
            isFocused && s.labelBackgroundLineFocused,
          ]}
        />
      </View>
      {error && wasChecked && isTouched && (
        <Text
          style={[
            error &&
              wasChecked &&
              isTouched &&
              s.errorNotActiveMessage,
            isTouched && error && isFocused && s.errorMessage,
          ]}
        >
          {error}
        </Text>
      )}

      {isLogin && (
        <Text style={s.forgotPassword}>Forgot password?</Text>
      )}
      <TextInput
        secureTextEntry={!!secured}
        {...props}
        onFocus={() => {
          setIsFocused(true);
          setIsTouched(true);
        }}
        onBlur={handleBlur}
      />
    </View>
  );
};

AuthInput.propTypes = {
  label: T.string,
  secured: T.bool,
  isError: T.bool,
  error: T.string,
  isLogin: T.bool,
};

export default AuthInput;
