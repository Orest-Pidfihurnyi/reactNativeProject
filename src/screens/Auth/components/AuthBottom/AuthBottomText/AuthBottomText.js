import React, { Fragment } from 'react';
import T from 'prop-types';
import { Text } from 'react-native';
import s from './styles';
import NavigationService from '../../../../../services/NavigationService';

const AuthBottomText = ({ isLogin }) => {
  return (
    <Fragment>
      {!isLogin ? (
        <Fragment>
          <Text style={s.question}>Don&#039;t have an account?</Text>
          <Text
            onPress={() => NavigationService.navigateToRegistration()}
            style={s.highlighted}
          >
            register
          </Text>
        </Fragment>
      ) : (
        <Fragment>
          <Text style={s.question}>Have an account?</Text>
          <Text
            onPress={() => NavigationService.navigateToLogin()}
            style={s.highlighted}
          >
            login
          </Text>
        </Fragment>
      )}
    </Fragment>
  );
};

AuthBottomText.propTypes = {
  isLogin: T.bool,
};

export default AuthBottomText;
