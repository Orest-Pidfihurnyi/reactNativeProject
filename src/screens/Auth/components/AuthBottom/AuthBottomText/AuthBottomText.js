import React from 'react';
import T from 'prop-types';
import { Text } from 'react-native';
import s from './styles';
import NavigationService from '../../../../../services/NavigationService';

const AuthBottomText = ({ isLogin }) => {
  return (
    <>
      {!isLogin ? (
        <>
          <Text style={s.question}>Don&#039;t have an account?</Text>
          <Text
            onPress={() => NavigationService.navigateToRegistration()}
            style={s.highlighted}
          >
            register
          </Text>
        </>
      ) : (
        <>
          <Text style={s.question}>Have an account?</Text>
          <Text
            onPress={() => NavigationService.navigateToLogin()}
            style={s.highlighted}
          >
            login
          </Text>
        </>
      )}
    </>
  );
};

AuthBottomText.propTypes = {
  isLogin: T.bool,
};

export default AuthBottomText;
