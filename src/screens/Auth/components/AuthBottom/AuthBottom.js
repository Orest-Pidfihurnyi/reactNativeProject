import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import AuthButton from '../AuthButton/AuthButton';
import s from './styles';
import AuthBottomText from './AuthBottomText/AuthBottomText';

const AuthBottom = ({ onSubmit, isRegister }) => {
  return (
    <View style={s.container}>
      <View style={s.textWrapper}>
        <AuthBottomText isLogin={!!isRegister} />
      </View>
      <View>
        <AuthButton onSubmit={onSubmit} style={s.authButton}>
          {isRegister ? 'Register' : 'Login'}
        </AuthButton>
      </View>
    </View>
  );
};

AuthBottom.defaultProps = {
  isRegister: false,
};

AuthBottom.propTypes = {
  onSubmit: T.func,
  isRegister: T.bool,
};

export default AuthBottom;
