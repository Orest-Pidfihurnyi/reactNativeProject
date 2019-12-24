import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import s from './styles';
import { useStore } from '../../../stores/createStore';
import AuthInput from '../components/AuthInput/AuthInput';
import styles from '../../../styles/styles';
import { isAndroid } from '../../../utils';
import NavigationService from '../../../services/NavigationService';
import AuthBottom from '../components/AuthBottom/AuthBottom';
import useValidationSchema from '../../../hooks/useValidationSchema';
import HeaderBackIcon from '../../../components/headerBackIcon/HeaderBackIcon';

function RegisterScreen() {
  const { validationSchemaForRegister } = useValidationSchema();
  const store = useStore();

  async function onSubmit({ email, password, fullName }) {
    await store.auth.register.run({
      email,
      password,
      fullName,
    });

    NavigationService.navigateToLogin();
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordRepeat: '',
        fullName: '',
      }}
      validationSchema={validationSchemaForRegister}
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
          <ScrollView>
            <View style={s.textContainer}>
              <AuthInput
                autoCapitalize="none"
                label="Full Name"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                error={errors.fullName}
                value={values.fullName}
              />
              <AuthInput
                label="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
                value={values.email}
                autoCapitalize="none"
              />
              <AuthInput
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                value={values.password}
                secured
                autoCapitalize="none"
              />
              <AuthInput
                label="Repeat Password"
                onChangeText={handleChange('passwordRepeat')}
                onBlur={handleBlur('passwordRepeat')}
                error={errors.passwordRepeat}
                value={values.passwordRepeat}
                secured
                autoCapitalize="none"
              />
            </View>
          </ScrollView>

          <AuthBottom isRegister onSubmit={handleSubmit} />
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}

RegisterScreen.navigationOptions = () => ({
  title: 'Register',
  headerStyle: styles.header,
  headerLeft: (props) => <HeaderBackIcon {...props} />,
});

RegisterScreen.propTypes = {};

export default RegisterScreen;
