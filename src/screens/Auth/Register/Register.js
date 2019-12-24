import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import s from './styles';
import { useStore } from '../../../stores/createStore';
import AuthInput from '../components/AuthInput/AuthInput';
import styles from '../../../styles/styles';
import { isAndroid } from '../../../utils';
import NavigationService from '../../../services/NavigationService';
import AuthBottom from '../components/AuthBottom/AuthBottom';
import useValidationSchema from '../../../hooks/useValidationSchema';
import colors from '../../../styles/colors';
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
                autoCapitalize="words"
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
                autoCapitalize="sentences"
              />
              <AuthInput
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                value={values.password}
                secured
              />
              <AuthInput
                label="Repeat Password"
                onChangeText={handleChange('passwordRepeat')}
                onBlur={handleBlur('passwordRepeat')}
                error={errors.passwordRepeat}
                value={values.passwordRepeat}
                secured
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
  headerLeft: (props) => (
    <HeaderBackIcon
      {...props}
      onPress={() => NavigationService.onGoBack()}
    >
      <Ionicons name="ios-arrow-back" size={32} color={colors.gray} />
    </HeaderBackIcon>
  ),
});

RegisterScreen.propTypes = {};

export default RegisterScreen;
