import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import s from './styles';
import AuthInput from '../components/AuthInput/AuthInput';
import styles from '../../../styles/styles';
import { isAndroid } from '../../../utils';
import AuthBottom from '../components/AuthBottom/AuthBottom';
import useValidationSchema from '../../../hooks/useValidationSchema';

function RegisterScreen() {
  const { validationSchemaForRegister } = useValidationSchema();

  function onSubmit(val) {
    console.log(val);
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordRepeat: '',
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
          <View style={s.textContainer}>
            <AuthInput
              label="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              value={values.email}
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
          <View>
            <AuthBottom isRegister onSubmit={handleSubmit} />
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}

RegisterScreen.navigationOptions = () => ({
  title: 'Register',
  headerStyle: styles.header,
});

RegisterScreen.propTypes = {};

export default RegisterScreen;
