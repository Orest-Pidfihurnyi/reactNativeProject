import React, { useState } from 'react';
import T from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, TextInput } from 'react-native';
import s from './styles';
import colors from '../../../../styles/colors';

const AuthInput = ({ label, secured, error, isLogin, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  return (
    <View
      style={[
        s.emailContainer,
        isFocused && s.focusedInput,
        error && isTouched && s.errorInput,
      ]}
    >
      {error && isTouched && (
        <Text style={s.errorIcon}>
          <MaterialIcons name="error" color={colors.red} size={16} />
        </Text>
      )}

      <Text style={[s.label, error && isTouched && s.labelError]}>
        {label}
      </Text>
      <Text
        style={[
          s.labelBackgroundLine,
          isTouched && s.labelBackgroundLineTouched,
          isFocused && s.labelBackgroundLineFocused,
          label === 'Email' && s.labelWidthEmail,
          label === 'Password' && s.labelWidthPassword,
          label === 'Repeat Password' && s.labelWidthRepeatPassword,
        ]}
      />
      {error && isTouched && (
        <Text
          style={[
            error && isTouched && s.errorNotActiveMessage,
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
        onBlur={() => setIsFocused(false)}
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
