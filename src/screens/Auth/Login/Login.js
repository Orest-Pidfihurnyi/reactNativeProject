import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import s from './styles';
import AuthInput from '../components/AuthInput/AuthInput';
import styles from '../../../styles/styles';
import { isAndroid } from '../../../utils';
import AuthBottom from '../components/AuthBottom/AuthBottom';
import { useStore } from '../../../stores/createStore';
import NavigationService from '../../../services/NavigationService';
import useValidationSchema from '../../../hooks/useValidationSchema';
import HeaderBackIcon from '../../../components/headerBackIcon/HeaderBackIcon';

function LoginScreen() {
  const { validationSchemaForLogin } = useValidationSchema();
  const store = useStore();

  async function onSubmit({ email, password }) {
    await store.auth.login.run({
      email,
      password,
    });

    NavigationService.navigateToApp();
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchemaForLogin}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <KeyboardAvoidingView
          keyboardVerticalOffset={isAndroid ? 80 : 65}
          behavior="padding"
          style={s.container}
        >
          <View style={s.textContainer}>
            <AuthInput
              label="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              error={errors.email}
              value={values.email}
              autoCapitalize="sentences"
            />
            <AuthInput
              label="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              value={values.password}
              secured
              isLogin
            />
          </View>
          <AuthBottom onSubmit={handleSubmit} />
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}

LoginScreen.navigationOptions = () => ({
  title: 'Login',
  headerStyle: styles.header,
  headerLeft: (props) => <HeaderBackIcon {...props} />,
});

LoginScreen.propTypes = {};

export default LoginScreen;
