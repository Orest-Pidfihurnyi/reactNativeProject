import * as Yup from 'yup';

function useValidationSchema() {
  const validationSchemaForRegister = Yup.object().shape({
    email: Yup.string()
      .email()
      .max(255, 'Must be shorter than 255')
      .required('Must enter an email'),
    fullName: Yup.string()
      .min(0, 'Must be longer than 0')
      .max(255, 'Must be shorter than 255')
      .required('Must enter an email'),
    password: Yup.string()
      .min(6, 'Must be longer than 6')
      .max(255, 'Must be shorter than 255')
      .required('Must enter a password'),
    passwordRepeat: Yup.string()
      .min(6, 'Must be longer than 6')
      .max(255, 'Must be shorter than 255')
      .required('Must confirm  password')
      .oneOf([Yup.ref('password')], 'Must be equal to password'),
  });

  const validationSchemaForLogin = Yup.object().shape({
    email: Yup.string()
      .email()
      .max(255, 'Must be shorter than 255')
      .required('Must enter an email'),
    password: Yup.string()
      .min(6, 'Must be longer than 6')
      .max(255, 'Must be shorter than 255')
      .required('Must enter a password'),
  });

  const validationSchemaForRestorePassword = Yup.object().shape({
    email: Yup.string()
      .email()
      .max(255, 'Must be shorter than 255')
      .required('Must enter an email'),
  });

  return {
    validationSchemaForRegister,
    validationSchemaForLogin,
    validationSchemaForRestorePassword,
  };
}

export default useValidationSchema;
